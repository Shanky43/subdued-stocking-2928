import React from "react";

import { Box, Heading } from "@chakra-ui/react";
import styles from "../Styling/Thank.module.css";
function Thankyou() {
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box id="box">
      <div className={styles.content}>
        <div className={styles.wrapper1}>
          <div className={styles.wrapper2}>
            <Heading color={"teal.300"} pb={4} size="lg" fontSize="50px">
              Thank-you
            </Heading>
            <Heading color={"orange.400"} size={"md"}>
              Thank you for your purchase! Your order has been received and is
              being processed. We appreciate your business and look forward to
              serving you again in the future.
            </Heading>
          </div>
          <div className={styles.pyro}>
            <div className={styles.before}></div>
            <div className={styles.after}></div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Thankyou;
