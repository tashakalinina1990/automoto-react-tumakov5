import React, {useState} from "react";
import {CarPropTypes} from "../../prop-types";
import Specification from "../specification/specification";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";
import "./tabs.scss";

const TabsCode = {
  SPECIFICATION: 1,
  REVIEWS: 2,
  CONTACTS: 3,
};

const getActiveTabElement = (activeTab, car) => {
  switch (activeTab) {
    case TabsCode.SPECIFICATION:
      return <Specification car={car} />;
    case TabsCode.REVIEWS:
      return <Reviews />;
    case TabsCode.CONTACTS:
      return <Contacts />;
    default:
      return;
  }
};

const Tabs = (props) => {
  const {car} = props;
  const [activeTab, setActiveTab] = useState(TabsCode.SPECIFICATION);

  const HandleSpecificationButtonFocus = () => {
    setActiveTab(TabsCode.SPECIFICATION);
  };

  const HandleReviewsButtonFocus = () => {
    setActiveTab(TabsCode.REVIEWS);
  };

  const HandleContactsButtonFocus = () => {
    setActiveTab(TabsCode.CONTACTS);
  };

  return (
    <div className="tabs car-screen__tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsCode.SPECIFICATION && "tabs__button--active"
            }`}
            type="button"
            onFocus={HandleSpecificationButtonFocus}
          >
            Характеристики
          </button>
        </li>
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsCode.REVIEWS && "tabs__button--active"
            }`}
            type="button"
            onFocus={HandleReviewsButtonFocus}
          >
            Отзывы
          </button>
        </li>
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsCode.CONTACTS && "tabs__button--active"
            }`}
            type="button"
            onFocus={HandleContactsButtonFocus}
          >
            Контакты
          </button>
        </li>
      </ul>
      {getActiveTabElement(activeTab, car)}
    </div>
  );
};

Tabs.propTypes = {
  car: CarPropTypes,
};

export default Tabs;
