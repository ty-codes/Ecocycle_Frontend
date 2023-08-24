import Swal from "sweetalert2";
// import moment from "moment/moment";
import { P1, P2, P3, P4, P5, P6, P7, P8, P9, S1, S2, female } from "../assets";

const width = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
  isSmallDevice: "768px"
};

const height = {
  small: "400px",
  mid: "800px"
};

export const device = {
  mobileS: `(max-width: ${width.mobileS})`,
  mobileM: `(max-width: ${width.mobileM})`,
  mobileL: `(max-width: ${width.mobileL})`,
  tablet: `(max-width: ${width.tablet})`,
  laptop: `(max-width: ${width.laptop})`,
  laptopL: `(max-width: ${width.laptopL})`,
  desktop: `(max-width: ${width.desktop})`,
  desktopL: `(max-width: ${width.desktop})`,
  isSmallDevice: `(max-width: ${width.isSmallDevice})`
};

export const deviceHeight = {
  small: `(max-height: ${height.small})`,
  mid: `(max-height: ${height.mid})`
};

export const setToStorage = (key, value) => {
  let storedValue = JSON.stringify(value);
  localStorage.setItem(key, storedValue);
};

export const getFromStorage = (key) => {
  let value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const fireSwalSuccess = (message, callback = () => {}) => {
  Swal.fire({
    icon: "success",
    toast: true,
    position: "top",
    title: message,
    showConfirmButton: false,
    timer: 2000
  }).then(() => {
    callback();
  });
};

export const fireSwalError = (message) => {
  Swal.fire({
    icon: "error",
    toast: true,
    position: "top-end",
    title: message,
    showConfirmButton: false,
    timer: 2000
  });
};

export const fireSwalConfirm = (confirmFunction) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#E4410A",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      confirmFunction();
    }
  });
};

export const fireSwalPayment = (confirmFunction) => {
  Swal.fire({
    title: "Insufficient Funds?",
    text: "You do not have enough in your pocket to stream this song! Please deposit into your pocket to continue",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#E4410A",
    cancelButtonColor: "#d33",
    confirmButtonText: "Deposit"
  }).then((result) => {
    if (result.isConfirmed) {
      confirmFunction();
    }
  });
};

export const fireSwalPaymentValidation = (amount, confirmFunction) => {
  Swal.fire({
    title: "Payment",
    text: `You will be required to pay the sum of ${amount}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#E4410A",
    cancelButtonColor: "#d33",
    confirmButtonText: "Pay"
  }).then((result) => {
    if (result.isConfirmed) {
      confirmFunction();
    }
  });
};

export const fireSwalLogin = (confirmFunction) => {
  Swal.fire({
    title: "You need to login",
    text: "To play/download this song you need to login",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#FFBC1D",
    cancelButtonColor: "#d33",
    confirmButtonText: "Login"
  }).then((result) => {
    if (result.isConfirmed) {
      confirmFunction();
    }
  });
};

const siteURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ecocycle.vercel.app";

export const copyToClipboard = async (link) => {
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(`${siteURL}${link}`);
  } else {
    document.execCommand("copy", true, `${siteURL}${link}`);
  }
  fireSwalSuccess("Link Copied");
};

export const prefixURL = process.env.REACT_APP_FILEURL;

export const logout = () => {
  localStorage.clear();
  window.location.reload();
};

export const products = [
  {
    name: "laundry basket",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "derrick t",
    price: 2500,
    type: "home",
    sold: 50,
    image: P1
  },
  {
    name: "spooner wallclock",
    description:
      "Wall clock made with plastic spoons to add to your home beauty.",
    username: "susan f",
    price: 2500,
    type: "decorations",
    sold: 50,
    image: P5
  },
  {
    name: "items basket",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "derrick t",
    price: 2500,
    type: "kitchen",
    sold: 50,
    image: P3
  },
  {
    name: "items basket",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "derrick t",
    price: 2500,
    type: "bedroom",
    sold: 50,
    image: P4
  },
  {
    name: "the cap stool",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "derrick t",
    price: 2500,
    type: "home",
    sold: 50,
    image: P2
  },
  {
    name: "Peacock wallpaper",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "derrick t",
    price: 2500,
    type: "decorations",
    sold: 50,
    image: P6
  },
  {
    name: "the icon lamp",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "john p",
    price: 2500,
    type: "bedroom",
    sold: 50,
    image: P7
  },
  {
    name: "chandelier",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "sam s",
    price: 2500,
    type: "decorations",
    sold: 50,
    image: P8
  },
  {
    name: "Bird wall decor",
    description: "Organize your bedroom and kitchen items without hassle.",
    username: "derrick t",
    price: 2500,
    type: "decorations",
    sold: 50,
    image: P9
  }
];

export const centres = [
  {
    image: S1,
    location: "42, LGA office Ikeja, Lagos",
    rating: 5,
    name: "Ikeja collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S2,
    location: "25, Fobade, Lagos.",
    rating: 4,
    name: "Baruwa collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S1,
    location: "93, Ipaja road, Lagos",
    rating: 3,
    name: "Ipaja collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S2,
    location: "12A, Ojo-road, Lagos",
    rating: 2,
    name: "Ojo collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S1,
    location: "42, Old yaba road, Lagos",
    rating: 4,
    name: "Yaba collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S2,
    location: "36A, akoka, Lagos",
    rating: 5,
    name: "Unilag collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S1,
    location: "56A, lake road, Lagos",
    rating: 4,
    name: "Lake collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S2,
    location: "42, aba market, Aba",
    rating: 2,
    name: "Aba collection center",
    reviews: 40,
    user_avatar: female
  },
  {
    image: S1,
    location: "16, alaba market, Lagos",
    rating: 4,
    name: "Alaba collection center",
    reviews: 40,
    user_avatar: female
  }
  
]
