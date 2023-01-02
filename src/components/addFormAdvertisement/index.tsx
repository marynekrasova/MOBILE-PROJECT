import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-remix-icon";
import { useIsFocused } from "@react-navigation/native";
import ImagePicker from "react-native-image-crop-picker";
import styles from "./styles";
import Input from "../input";
import FilledButton from "../primaryButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addAdvert, changeAdvert } from "../../app/slices/CategoriesSlice";
import DropdownMenu from "../dropdownMenu";
import Alert from "../alert";
import SecondaryButton from "../secondaryButton";
import BorderedFormContainer from "../borderedFormContainer";
import arrayValueCurrency from "../../constants/currency";
import arrayValueLocation from "../../constants/location";
import arrayValueCategories from "../../constants/categories";
import arrayValueWeight from "../../constants/unit";
import { getModerationList } from "../../app/slices/ModerationSlice";
import arrayValueProductTitle from "../../constants/productTitle";

type Item = {
  id: number;
  title: string;
  country: string;
  location: string;
  slug: string;
  category: string;
  subCategory: string;
  price: string;
  currency: string;
  images: [{ img: string }];
  quantity: string;
  unit: string;
};
const DisplayingErrorSchema = Yup.object().shape({
  price: Yup.number()
    .min(2)
    .typeError("you must enter a number")
    .required("Enter price"),
  weight: Yup.number()
    .typeError("you must enter a number")
    .required("Enter weight"),
  title: Yup.string().typeError("you must enter a title"),
});
const options = {
  title: "Select Image",
  type: "library",
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: "photo",
    includeBase64: false,
  },
};
export interface AddProps {
  params: Item;
  navigation: any;
  editMode: boolean;
}

export default function AdvertForm({ navigation, params, editMode }: AddProps) {
  const slug = editMode && params.slug;
  const [showError, setShowError] = useState(false);
  const [valueCurrency, setValueCurrency] = useState("USD");
  const [valueAmount, setValueAmount] = useState("kg");
  const [valueLocation, setValueLocation] = useState("");
  const [valueCategories, setValueCategories] = useState("");
  const [valueProductTitle, setValueProductTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [alertText, setAlertText] = useState([]);
  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] = useState([]);
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.app.token);
  const userRoles = useAppSelector(
    (state) => state.app.loginData.user.userRoles
  );

  function checkRole(role: number): boolean {
    return userRoles.find((item) => item.role_id === role);
  }
  const addPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
      mediaType: "photo",
      maxFiles: 3,
    })
      .then((images) => {
        setImage(images);
      })
      .catch((err) => {
        console.log("User cancelled image selection");
      });
  };
  function clearState() {
    setValueCurrency("USD");
    setValueAmount("kg");
    setValueLocation("");
    setValueCategories("");
    setValueProductTitle("");
    setImage([]);
  }
  function adResponse(response, resetForm) {
    if (response.payload.status >= 200 && response.payload.status < 300) {
      setShowAlert(false);
      setShowLoader(false);
      clearState();
      resetForm();
      if (checkRole(3)) {
        dispatch(getModerationList(token));
      }
      navigation.navigate("SuccessScreen", {
        text: "Your ad has been sent for moderation",
        nameScreen: "CategoriesScreen",
      });
    } else {
      setShowLoader(false);
      setAlertText(response.payload.data.message);
      setShowAlert(true);
    }
  }
  function addAdvertHandler(
    values: {
      price: string;
      weight: string;
      title: string;
    },
    resetForm: any
  ) {
    if (
      valueCategories !== "" &&
      valueProductTitle !== "" &&
      valueLocation !== ""
    ) {
      setShowLoader(true);
      setShowError(false);
      editMode
        ? dispatch(
            changeAdvert({
              ...values,
              valueCurrency,
              valueAmount,
              valueLocation,
              valueCategories,
              valueProductTitle,
              image,
              token,
              slug,
            })
          ).then((response) => {
            adResponse(response, resetForm);
          })
        : dispatch(
            addAdvert({
              ...values,
              valueCurrency,
              valueAmount,
              valueLocation,
              valueCategories,
              valueProductTitle,
              image,
              token,
            })
          ).then((response) => {
            adResponse(response, resetForm);
          });
    } else {
      setShowError(true);
    }
  }
  return (
    <ScrollView style={styles.formContainer}>
      {showAlert && <Alert text={alertText} />}
      {showLoader && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#38999B" />
        </View>
      )}
      <Formik
        initialValues={{
          price: "",
          weight: "",
          title: "",
        }}
        validationSchema={DisplayingErrorSchema}
        validateOnChange={validateAfterSubmit}
        onSubmit={(values, { resetForm }) => {
          addAdvertHandler(values, resetForm);
        }}
      >
        {(props) => {
          const isFocused = useIsFocused();
          useEffect(() => {
            if (isFocused && editMode) {
              props.setFieldValue("price", params.price);
              props.setFieldValue("weight", params.quantity);
              setValueProductTitle(params.title);
              setValueLocation(params.location);
              setValueCurrency(params.currency);
              setValueAmount(params.unit);
              setValueCategories(params.category);
              setImage(params.images);
            }
          }, [isFocused]);
          useEffect(() => {
            if (valueProductTitle !== "Other") {
              props.setFieldValue("title", "");
            }
          }, [valueProductTitle]);
          return (
            <View style={styles.flexContainer}>
              <Text style={styles.inputTitle}>Category</Text>
              <Text style={styles.imgText}>
                Select the category in which you want to submit your product.
                Your ad must match the theme.
              </Text>
              <View style={[styles.dropStyle, { zIndex: 10 }]}>
                <DropdownMenu
                  style={styles.dropWidth}
                  options={arrayValueCategories}
                  placeholder="Select a category"
                  value={valueCategories}
                  setValue={setValueCategories}
                  listMode="MODAL"
                />
                {valueCategories === "" && showError && (
                  <Text style={styles.validError}>
                    You must select a category
                  </Text>
                )}
              </View>
              <View style={{ zIndex: 9 }}>
                <DropdownMenu
                  style={styles.dropWidth}
                  options={arrayValueProductTitle}
                  placeholder="Select a product type"
                  value={valueProductTitle}
                  setValue={setValueProductTitle}
                  listMode="MODAL"
                />
                {valueProductTitle === "" && showError && (
                  <Text style={styles.validError}>
                    You must select a product
                  </Text>
                )}
              </View>
              {valueProductTitle === "Other" && (
                <View style={styles.inputTitle}>
                  <Input
                    onFocus={() => {
                      props.setFieldError("title", undefined);
                    }}
                    valid={props.errors.title}
                    placeholder="Enter the title"
                    value={props.values.title}
                    onChangeText={props.handleChange("title")}
                  />
                  {props.errors.title && (
                    <Text style={styles.validError}>{props.errors.title}</Text>
                  )}
                </View>
              )}
              <Text style={styles.inputTitle}>Quantity</Text>
              <View style={[styles.inputFlex, { zIndex: 8 }]}>
                <View style={styles.inputWrap}>
                  <Input
                    onFocus={() => {
                      props.setFieldError("weight", undefined);
                    }}
                    valid={props.errors.weight}
                    placeholder="Enter the quantity"
                    value={props.values.weight}
                    onChangeText={props.handleChange("weight")}
                  />
                  {props.errors.weight && (
                    <Text style={styles.validError}>{props.errors.weight}</Text>
                  )}
                </View>
                <DropdownMenu
                  options={arrayValueWeight}
                  placeholder="Select weight"
                  value={valueAmount}
                  setValue={setValueAmount}
                  listMode="SCROLLVIEW"
                />
              </View>
              <Text style={styles.inputTitle}>Price</Text>
              <View style={[styles.inputFlex, { zIndex: 7 }]}>
                <View style={styles.inputWrap}>
                  <Input
                    onFocus={() => {
                      props.setFieldError("price", undefined);
                    }}
                    valid={props.errors.price}
                    placeholder="Enter the price"
                    value={props.values.price}
                    onChangeText={props.handleChange("price")}
                  />
                  {props.errors.price && (
                    <Text style={styles.validError}>{props.errors.price}</Text>
                  )}
                </View>
                <DropdownMenu
                  options={arrayValueCurrency}
                  placeholder="Select currency"
                  value={valueCurrency}
                  setValue={setValueCurrency}
                  listMode="SCROLLVIEW"
                />
              </View>
              <Text style={styles.inputTitle}>Location</Text>
              <Text style={styles.country}>Uzbekistan</Text>
              <View style={{ zIndex: 4 }}>
                <DropdownMenu
                  style={styles.dropWidth}
                  options={arrayValueLocation}
                  placeholder="Select location"
                  value={valueLocation}
                  setValue={setValueLocation}
                  listMode="MODAL"
                />
                {valueLocation === "" && showError && (
                  <Text style={styles.validError}>
                    You must select location
                  </Text>
                )}
              </View>
              <Text style={styles.validError} />
              <Text style={styles.inputTitle}>Product images</Text>
              <Text style={styles.imgText}>
                Pictures work much better than the most talented text. The more
                photos, the better.
              </Text>
              <View style={styles.inputFlex}>
                <View style={styles.imgUpload}>
                  <TouchableOpacity
                    style={styles.imgTouchableOpacity}
                    onPress={addPhoto}
                  >
                    {image[0] ? (
                      <Image
                        style={styles.imgContainer}
                        source={{
                          uri: image[0]?.path ? image[0]?.path : image[0]?.img,
                        }}
                      />
                    ) : (
                      <Icon
                        style={styles.icon}
                        name="ri-image-line"
                        color={styles.icon.color}
                        size={30}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.imgUpload}>
                  <TouchableOpacity
                    style={styles.imgTouchableOpacity}
                    onPress={addPhoto}
                  >
                    {image[1] ? (
                      <Image
                        style={styles.imgContainer}
                        source={{ uri: image[1]?.path }}
                      />
                    ) : (
                      <Icon
                        style={styles.icon}
                        name="ri-image-line"
                        color={styles.icon.color}
                        size={30}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.imgUpload}>
                  <TouchableOpacity
                    style={styles.imgTouchableOpacity}
                    onPress={addPhoto}
                  >
                    {image[2] ? (
                      <Image
                        style={styles.imgContainer}
                        source={{ uri: image[2]?.path }}
                      />
                    ) : (
                      <Icon
                        style={styles.icon}
                        name="ri-image-line"
                        color={styles.icon.color}
                        size={30}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <BorderedFormContainer>
                {!editMode && (
                  <SecondaryButton
                    disabled={!props.isValid}
                    type="submit"
                    title="Preview"
                    onPress={() => {
                      navigation.navigate("PreviewAdScreen", {
                        title:
                          valueProductTitle &&
                          (props.values.title !== ""
                            ? props.values.title
                            : valueProductTitle),
                        price: props.values.price,
                        weight: props.values.weight,
                        images: image,
                        currency: valueCurrency,
                        amount: valueAmount,
                        location: valueLocation,
                        country: "Uzbekistan",
                      });
                    }}
                  />
                )}
                <Text style={[styles.imgText, styles.textMarginTop]}>
                  This ad will be placed on the site after review by a moderator
                  and will be valid for the next 30 days.
                </Text>
                <FilledButton
                  disabled={!props.isValid}
                  type="submit"
                  title={
                    editMode
                      ? "Change an advertisement"
                      : "Place an advertisement"
                  }
                  onPress={() => {
                    setValidateAfterSubmit(true);
                    props.handleSubmit();
                  }}
                />
                <View style={styles.margin} />
              </BorderedFormContainer>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
}
