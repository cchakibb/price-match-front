import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
// const icon = <FontAwesomeIcon icon={faHeart} />;

export default function FooterMain() {
  return (
    <div className="ironhackers">
      <div>Created by :</div>

      <a href="https://www.linkedin.com/in/SpyrosKyritsis/">
        Spyros Kyritsis |<TiSocialLinkedinCircular size={25} color="grey" />
      </a>

      <a href="https://www.linkedin.com/in/chakib-bachir/">
        Chakib Bachir |<TiSocialLinkedinCircular size={25} color="grey" />{" "}
      </a>

      <a href="https://www.linkedin.com/in/malamine-bah-219781196/">
        Malamine Bah |<TiSocialLinkedinCircular size={25} color="grey" />
      </a>
    </div>
  );
}
