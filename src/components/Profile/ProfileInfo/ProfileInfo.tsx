import React from "react";
import st from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={st.descriptionBlockAll}>
            <div className={st.imgP}>
                <img src="https://img1.goodfon.ru/wallpaper/nbig/f/e3/voda-hlorka-biryuza.jpg" alt=""/>
            </div>
            <div className={st.descriptionBlock}>
                <div className={st.imgPrf}>
                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                         alt=""/>
                </div>
                <div>
                    description
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;