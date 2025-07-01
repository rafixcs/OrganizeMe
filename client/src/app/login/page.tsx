import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.login}>
          <form className={styles.login_container}>
            <h1>Welcome!</h1>
            <div className={styles.inputs_container}>
              <input 
                placeholder="Username"
                type="text"
                id="username"
                name="username"
              />

              <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
              />
            </div>

            <Link 
              className={styles.create_account}
              href={`/`}
            >
              Create Account
            </Link>
            <button>Login</button>
            
            <label></label>
          </form>
        </div>
        <div className={styles.banner}>
          <h1>Organize me!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in risus augue. Etiam quis sapien leo. Pellentesque pulvinar lobortis nulla, quis aliquet quam porttitor eu. Nam bibendum urna a dignissim porttitor. Pellentesque consectetur elementum luctus. Proin ac nulla et mi ullamcorper pulvinar eget vitae tellus. Donec sagittis facilisis cursus. Suspendisse eleifend ac erat ac imperdiet. Phasellus ex libero, sollicitudin et varius nec, tempus ac nulla. Vestibulum in felis non magna suscipit condimentum. Quisque faucibus nibh eu condimentum venenatis. Vestibulum vitae urna mollis, mollis libero consequat, rhoncus augue. Nulla efficitur mollis metus, id dapibus nisi laoreet et. Pellentesque accumsan urna nec magna tempor, eget finibus purus pellentesque. Vivamus aliquet aliquam euismod. Curabitur nec sagittis mi.
          </p>
        </div>
      </div>
    </>
  )
}
