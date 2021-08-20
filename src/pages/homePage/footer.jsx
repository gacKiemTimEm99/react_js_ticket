import React from "react";
import "../../style/footer.scss";

export default function Footer() {
  const icon = process.env.PUBLIC_URL + "/img/icon-fb.png";
  const iconyb = process.env.PUBLIC_URL + "/img/icon-ytb.png";
  const appios = process.env.PUBLIC_URL + "/img/app-ios.png";
  const appandroid = process.env.PUBLIC_URL + "/img/app-android.png";
  const iconemail = process.env.PUBLIC_URL + "/img/icon-l.png";
  const dathongbao = process.env.PUBLIC_URL + "/img/dathongbao";
  const partner = process.env.PUBLIC_URL + "/img/partner-2.png";

  return (
    <div className="footer">
      <div className="footer__above">
        <div className="footer__above__item item-left">
          <h5>chăm sóc khách hàng</h5>
          <p>
            <span>hotline: </span>0935864032
          </p>
          <p>
            <span>giờ làm việc: </span> ngày làm cũng làm
          </p>
          <p>
            <span>email: </span>fenickkushu@gmail.com
          </p>
        </div>
        <div className="footer__above__item item-center">
          <h5>kết nối với chúng tôi</h5>
          <div className="item-center-icon">
            <a href="https://www.facebook.com/ng.va.ph.304" target="_blank">
              <img src={icon} alt />
            </a>
            <a
              href="https://www.youtube.com/watch?v=p0pjgTrFip8"
              target="_blank"
            >
              <img src={iconyb} alt />
            </a>
          </div>
          <h5>ứng dụng</h5>
          <div className="item-center-img">
            <img src={appios} alt />
            <img src={appandroid} alt />
          </div>
          <a href>Phiên bản Mobile</a>
        </div>
        <div className="footer__above__item item-right">
          <div className="item-right-item right-left">
            <a href>điều khoản chung</a>
            <a href>điều khoản giao dịch</a>
            <a href>chính sách thanh toán</a>
            <a href>chính sách bảo mật thông tin</a>
            <div className="bg">
              <img src={iconemail} alt />
              <span>đăng ký nhận tin</span>
            </div>
          </div>
          <div className="item-right-item right-right">
            <a href>câu hỏi thường gặp</a>
            <a href>hướng dẫn đặt vé online</a>
            <a href>liên hệ</a>
            <a href>tuyển dụng</a>
            <div>
              <img src={dathongbao} alt />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__under">
        <img src={partner} alt />
      </div>
    </div>
  );
}
