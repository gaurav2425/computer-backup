import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        {/* <Image src="/logo.png" className={styles.footerimg}></Image> */}

        <div className={styles.footer_up}>
          <div className={styles.footer_right_container1}>
            <h1>More Netversify</h1>
            <ul>
              <li>Blog</li>
              <li>Knowledge Center</li>
              <li>New User Guide</li>
              <li>Creator Guide</li>
              <li>Guidelines</li>
            </ul>
          </div>

          <div className={styles.footer_right_container2}>
            <h1>Get in touch</h1>
            <ul>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Feedback</li>
              <li>Help</li>
            </ul>
          </div>

          <div className={styles.footer_right_container2}>
            <h1>Socials</h1>
            <ul className={styles.social_list}>
              <div>
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31 15.0125C31 6.72561 24.056 0 15.5 0C6.944 0 0 6.72561 0 15.0125C0 22.2786 5.332 28.3286 12.4 29.7248V19.5163H9.3V15.0125H12.4V11.2594C12.4 8.36198 14.8335 6.00501 17.825 6.00501H21.7V10.5088H18.6C17.7475 10.5088 17.05 11.1843 17.05 12.01V15.0125H21.7V19.5163H17.05V29.95C24.8775 29.1994 31 22.804 31 15.0125Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.7 0H21.3C26.1 0 30 3.9 30 8.7V21.3C30 23.6074 29.0834 25.8203 27.4518 27.4518C25.8203 29.0834 23.6074 30 21.3 30H8.7C3.9 30 0 26.1 0 21.3V8.7C0 6.39262 0.916605 4.17974 2.54817 2.54817C4.17974 0.916605 6.39262 0 8.7 0ZM8.4 3C6.96783 3 5.59432 3.56893 4.58162 4.58162C3.56893 5.59432 3 6.96783 3 8.4V21.6C3 24.585 5.415 27 8.4 27H21.6C23.0322 27 24.4057 26.4311 25.4184 25.4184C26.4311 24.4057 27 23.0322 27 21.6V8.4C27 5.415 24.585 3 21.6 3H8.4ZM22.875 5.25C23.3723 5.25 23.8492 5.44754 24.2008 5.79917C24.5525 6.15081 24.75 6.62772 24.75 7.125C24.75 7.62228 24.5525 8.09919 24.2008 8.45082C23.8492 8.80246 23.3723 9 22.875 9C22.3777 9 21.9008 8.80246 21.5492 8.45082C21.1975 8.09919 21 7.62228 21 7.125C21 6.62772 21.1975 6.15081 21.5492 5.79917C21.9008 5.44754 22.3777 5.25 22.875 5.25ZM15 7.5C16.9891 7.5 18.8968 8.29018 20.3033 9.6967C21.7098 11.1032 22.5 13.0109 22.5 15C22.5 16.9891 21.7098 18.8968 20.3033 20.3033C18.8968 21.7098 16.9891 22.5 15 22.5C13.0109 22.5 11.1032 21.7098 9.6967 20.3033C8.29018 18.8968 7.5 16.9891 7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5ZM15 10.5C13.8065 10.5 12.6619 10.9741 11.818 11.818C10.9741 12.6619 10.5 13.8065 10.5 15C10.5 16.1935 10.9741 17.3381 11.818 18.182C12.6619 19.0259 13.8065 19.5 15 19.5C16.1935 19.5 17.3381 19.0259 18.182 18.182C19.0259 17.3381 19.5 16.1935 19.5 15C19.5 13.8065 19.0259 12.6619 18.182 11.818C17.3381 10.9741 16.1935 10.5 15 10.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <svg
                  width="34"
                  height="26"
                  viewBox="0 0 34 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.92 3.05882C32.6715 3.59412 31.3257 3.94588 29.9313 4.11412C31.3582 3.30353 32.4607 2.01882 32.9796 0.474118C31.6338 1.23882 30.1421 1.77412 28.5693 2.08C27.2884 0.764706 25.4886 0 23.4457 0C19.6353 0 16.5222 2.93647 16.5222 6.56118C16.5222 7.08118 16.5871 7.58588 16.7006 8.06C10.9283 7.78471 5.78845 5.16941 2.36727 1.20824C1.76734 2.17176 1.42685 3.30353 1.42685 4.49647C1.42685 6.77529 2.64291 8.79412 4.52375 9.94118C3.37254 9.94118 2.30241 9.63529 1.36199 9.17647V9.22235C1.36199 12.4035 3.76168 15.0647 6.93966 15.6612C5.91934 15.9246 4.84819 15.9612 3.81033 15.7682C4.25071 17.072 5.11319 18.2129 6.27652 19.0304C7.43986 19.8479 8.84554 20.3009 10.296 20.3259C7.83732 22.1618 4.78965 23.1542 1.65384 23.14C1.10256 23.14 0.551281 23.1094 0 23.0482C3.08069 24.9141 6.74509 26 10.6689 26C23.4457 26 30.4664 15.9976 30.4664 7.32588C30.4664 7.03529 30.4664 6.76 30.4502 6.46941C31.8122 5.55176 32.9796 4.38941 33.92 3.05882Z"
                    fill="white"
                  />
                </svg>
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.footer_down}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliqui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            2023 @ Terms and ConditionsLorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
