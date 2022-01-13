import "../../../styles/index.css";

const LoginPage = () => {
  return (
    <div class="App">
      <div class="w-full min-h-screen min-h-[832px] bg-sky-600/50 p-24 ">
        <div class="w-full h-auto drop-shadow-2xl flex relative">
          <div class="bg-[url('../components/image/bg-confirm-infomation.png')] w-3/5 absolute h-full  bg-cover bg-left rounded-l-xl"></div>
          <div class="w-3/5"></div>
          <div class="bg-white w-2/5 h-full min-h-[640px] rounded-r-xl p-12 ">
            <form name="signupform">
              <h2 class="font-bold text-gray-600 text-4xl mb-3">Đăng ký</h2>

              {/* name */}
              <label class="font-bold text-gray-600 block w-full relative mb-1 ">
                Họ và tên<small class="text-red-500 font-thin">*</small>
                <input
                  type="text"
                  name="name"
                  required=""
                  placeholder="Nguyen Van A"
                  class="w-full focus:outline-none px-3 py-1 text-black mb-3 rounded-xl border border-black/50 font-thin "
                />
                <label class="block absolute w-full top-14 font-thin text-red-600 text-xs">
                  Đây là trường bắt buộc
                </label>
              </label>

              {/* email */}
              <label class="font-bold text-gray-600 block w-full relative mb-1">
                Email<small class="text-red-500 font-thin">*</small>
                <input
                  type="email"
                  name="name"
                  required=""
                  placeholder="demo@.example.com"
                  class="w-full focus:outline-none px-3 py-1 text-black mb-3 rounded-xl border border-black/50 font-thin "
                />
                <label class="block absolute w-full top-14 font-thin text-red-600 text-xs">
                  Đây là trường bắt buộc
                </label>
              </label>

              {/* password */}
              <label class="font-bold text-gray-600 block w-full relative mb-1">
                Mật khẩu<small class="text-red-500 font-thin">*</small>
                <input
                  type="password"
                  name="password"
                  required=""
                  placeholder="********"
                  class="w-full focus:outline-none px-3 py-1 text-black mb-3 rounded-xl border border-black/50 font-thin "
                />
                <label class="block absolute w-full top-14 font-thin text-red-600 text-xs">
                  Đây là trường bắt buộc
                </label>
              </label>

              {/* date of birth and sex*/}
              <div class="flex justify-between mb-0">
                <label class="font-bold text-gray-600 block w-1/2 relative ">
                  Ngày sinh
                  <input
                    type="date"
                    name="date"
                    required=""
                    class="w-full focus:outline-none py-1 text-black mb-3 border-b border-black font-thin text-sm"
                  />
                </label>
                <label class="font-bold text-gray-600 block w-2/5 relative ">
                  Giới tính<small class="text-red-500 font-thin">*</small>
                  <select
                    name="sex"
                    class="w-full min-w-[100px] focus:outline-none px-3 py-1 text-black mb-3 rounded-xl border border-black/50 font-thin block"
                  >
                    <option value=" "> </option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </label>
              </div>

              {/* identification */}
              <label class="font-bold text-gray-600 block w-full relative mb-1">
                Số cmnd/cccd<small class="text-red-500 font-thin">*</small>
                <input
                  type="text"
                  name="identification"
                  required=""
                  placeholder="placeholder"
                  class="w-full focus:outline-none px-3 py-1 text-black mb-3 rounded-xl border border-black/50 font-thin "
                />
                <label class="block absolute w-full top-14 font-thin text-red-600 text-xs">
                  Đây là trường bắt buộc
                </label>
              </label>

              {/* tel number */}
              <label class="font-bold text-gray-600 block w-full relative mb-1">
                Số điện thoại<small class="text-red-500 font-thin">*</small>
                <input
                  type="tel"
                  name="phone_number"
                  required=""
                  placeholder="placeholder"
                  class="w-full focus:outline-none px-3 py-1 text-black mb-3 rounded-xl border border-black/50 font-thin "
                />
                <label class="block absolute w-full top-14 font-thin text-red-600 text-xs">
                  Đây là trường bắt buộc
                </label>
              </label>

              {/* submit */}
              <div class="flex flex-col justify-center mt-3">
                <button class="w-full bg-blue-700/90 text-white rounded-xl py-2 font-semibold">
                  Đăng ký
                </button>
                <div class="flex  justify-center mt-1">
                  <span>Bạn đã có tài khoản?</span>
                  <span class="text-blue-500">Sign in</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
