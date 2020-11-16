import React from "react";
import "../css/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://www.amazon.co.uk/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909000&amp;ref_=footer_cou">
            Conditions of Use &amp; Sale
          </a>
        </li>
        <li>
          <a href="https://www.amazon.co.uk/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909010&amp;ref_=footer_privacy">
            Privacy Notice
          </a>
        </li>
        <li>
          <a href="https://www.amazon.co.uk/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201890250&amp;ref_=footer_cookies_notice">
            Cookies Notice
          </a>
        </li>
        <li>
          <a href="https://www.amazon.co.uk/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909150&amp;ref_=footer_Interest_Based_Ads_Notice">
            Interest-Based Ads Notice
          </a>
        </li>
        <li>© 1996-2020, Amazon.com, Inc. or its affiliates</li>
      </ul>
    </div>
  );
}
