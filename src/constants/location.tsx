const arrayValueLocation = [
  {
    label: "Andijan Region",
    value: "Andijan Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875817.523229775!2d72.27851902635125!3d40.62208261107949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc939c2cc9f571%3A0xf677ebc7b76654c8!2z0JDQvdC00LjQttCw0L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sby!4v1655969598157!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Bukhara Region",
    value: "Bukhara Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560053.0802972515!2d62.605507437727674!3d40.20953736159412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0x7d54acc77acd3717!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sby!4v1655969638039!5m2!1sru!2sby" width="100%" height="450" style="border:0;" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Fergana Region",
    value: "Fergana Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389234.84688192554!2d70.96369071357765!3d40.34462549095439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba35e21e649803%3A0xcd6937bf69229b68!2z0KTQtdGA0LPQsNC90YHQutCw0Y8g0J7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655969699907!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Jizzakh Region",
    value: "Jizzakh Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d779279.360918181!2d67.18383627358419!3d40.27441728743713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2ea58f711aca9%3A0xe18d916c84a0f4df!2z0JTQttC40LfQsNC60YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655969720895!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Xorazm Region",
    value: "Xorazm Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767589.0690187817!2d60.649603264518674!3d41.278511343580554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41de3cbf7f89baef%3A0xe874bc482a2737e!2z0KXQvtGA0LXQt9C80YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655969742434!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Namangan Region",
    value: "Namangan Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d384864.5415684484!2d70.98245466088257!3d41.0962162044639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4c708e5b54231%3A0x4e71cd6bb0e2df44!2z0J3QsNC80LDQvdCz0LDQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sby!4v1655970672245!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Navoiy Region",
    value: "Navoiy Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056062.248681984!2d61.95643707968042!3d41.58145419611275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f58007030619501%3A0x4e9722f8f8bc17f8!2z0J3QsNCy0L7QuNC50YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655970707052!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Qashqadaryo Region",
    value: "Qashqadaryo Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796322.785897179!2d65.44639231253619!3d38.772054674892594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c0f733ef3784f%3A0xad8977474640b0e7!2z0JrQsNGI0LrQsNC00LDRgNGM0Y8sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655970738501!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Samarqand Region",
    value: "Samarqand Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783341.2576784062!2d65.66854994541782!3d39.92065456526467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d192105ad6575%3A0x3dd6eaee02d96aa6!2z0KHQsNC80LDRgNC60LDQvdC00YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655970772112!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Sirdaryo Region",
    value: "Sirdaryo Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776387.9407864782!2d68.04314989140286!3d40.52467632608776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ade9cca3f36d5f%3A0xc830f01b9aaeedac!2z0KHRi9GA0LTQsNGA0YzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655970799639!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Surxondaryo Region",
    value: "Surxondaryo Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803439.7645189386!2d66.89979537986524!3d38.13004022754378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5110fcbfa23c3%3A0xb095bebbc47ce718!2z0KHRg9GA0YXQsNC90LTQsNGA0YzRjywg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sby!4v1655970832158!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Tashkent Region",
    value: "Tashkent Region",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536096.4916117224!2d68.83287712351314!3d41.239452569716406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afbcaa73f2ce4d%3A0x57f19ae913e2f367!2z0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sby!4v1655970863027!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Republic of Karakalpakstan",
    value: "Republic of Karakalpakstan",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4300768.105990121!2d57.6008913975848!3d43.53774685748058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41e9b68886e89265%3A0xc7f1caf0e51ae55a!2z0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQsNGA0LDQutCw0LvQv9Cw0LrRgdGC0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sby!4v1655970908682!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    label: "Tashkent city",
    value: "Tashkent city",
    link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.65769722054!2d69.20932719648285!3d41.28257622552681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1655970936614!5m2!1sru!2sby" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
];
export default arrayValueLocation;
