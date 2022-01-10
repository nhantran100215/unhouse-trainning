import "../../styles/index.css";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { Form, Input } from "antd";
// import { fForm} from "../image/";

// const SignupPage = () => {
//   const onFinish = (values) => {
//     console.log(values);
//   };
//   return (
//     // <div className="signup bg-blue-600/10 h-screen flex justify-center items-center flex-col">
//     //   <div className="bg-white p-12">
//     //     {/* logo */}
//     //     <div className="mb-4">
//     //       <a href={"./loginpage"}>
//     //         <img
//     //           // src={"./image/login-bg.jpg"}
//     //           src={process.env.PUBLIC_URL + "/image/signup_logo.png"}
//     //           alt={"logo griay"}
//     //         ></img>
//     //       </a>
//     //     </div>
//     //     <h4 className="mb-6">Sign up your account</h4>

//     //     {/* form */}
//     //     {/* username */}
//     //     <Form name="signupform" onFinish={onFinish}>
//     //       <Form.Item
//     //         name={["user", "name"]}
//     //         label="Username"
//     //         rules={[{ required: true }]}
//     //         className="text-sm font-bold text-login_page-grey mb-3"
//     //       >
//     //         <Input
//     //           placeholder="Username"
//     //           className="mt-1 h-11 bg-white py-[0.3125rem] px-5 border-[0.0625rem] border-[#f5f5f5] rounded-2xl focus:border-login_page-blue outline-none"
//     //         ></Input>
//     //       </Form.Item>
//     //       {/* Email */}
//     //       <Form.Item
//     //         name={["user", "name"]}
//     //         label="Email"
//     //         initialValue="demo@example.com"
//     //         className="text-sm font-bold  text-login_page-grey mb-3 "
//     //         rules={[
//     //           {
//     //             required: true,
//     //             type: "email",
//     //             message: "this is not a valid email",
//     //           },
//     //           // check email include one in special characters
//     //           ({ getFieldValue }) => ({
//     //             validator(_, value) {
//     //               if (value !== undefined) {
//     //                 // console.log("email:", value);
//     //                 let arr_str = value.split("@");
//     //                 // console.log("arr_str", arr_str, arr_str.length);
//     //                 if (arr_str.length === 2) {
//     //                   let local_part = arr_str[0];
//     //                   let format = /[!@#$%^&*+\-=[]`|\/?]+/;
//     //                   if (format.test(local_part)) {
//     //                     console.log("local_part", local_part);
//     //                     return Promise.reject(
//     //                       Error("this is not a valid email!")
//     //                     );
//     //                   }
//     //                   return Promise.resolve();
//     //                 }
//     //               }
//     //               return Promise.reject(Error(""));
//     //             },
//     //           }),
//     //         ]}
//     //       >
//     //         <Input
//     //           placeholder="Email"
//     //           //   onChange={closeResults}
//     //           className="mt-1 h-11 bg-white py-[0.3125rem] px-5 border-[0.0625rem] border-[#f5f5f5] rounded-2xl focus:border-login_page-blue outline-none text-sm"
//     //         />
//     //       </Form.Item>
//     //       {/* password */}
//     //       <Form.Item
//     //         name={["user", "password"]}
//     //         rules={[{ required: true, message: "Please input your password!" }]}
//     //         label="Password"
//     //         className="text-sm font-bold text-login_page-grey mb-3"
//     //       >
//     //         <input
//     //           type="password"
//     //           name="password"
//     //           minlength="8"
//     //           required
//     //           className="mt-1 h-11 bg-white py-[0.3125rem] px-5 border-[0.0625rem] border-[#f5f5f5] rounded-2xl focus:border-login_page-blue outline-none text-sm"
//     //         />
//     //       </Form.Item>

//     //       <Form.Item>
//     //         <button className="">Sign me up</button>
//     //       </Form.Item>
//     //       <div>
//     //         <p>Already have an account? </p>
//     //         <p>Sign in </p>
//     //       </div>
//     //     </Form>
//     //   </div>
//     // </div>
//   );
// };

// export default SignupPage;
