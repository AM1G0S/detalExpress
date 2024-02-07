import { FC, memo } from "react";

import { Form } from "./styled";

interface HeaderProps {}

export const FormCheck: FC = memo((props: HeaderProps) => {
  const {} = props;

  return (
    <Form>
      <div className="w-100 search-buttons">
        <a href="" data-link="num" className="tab-button active">
          ГОС-номер
        </a>
        <a href="" data-link="vin" className="tab-button">
          VIN
        </a>
        <a href="" data-link="body" className="tab-button">
          Номер кузова
        </a>
      </div>
      <div className="w-100">
        <input
          type="text"
          className="input-tabs active"
          placeholder="Укажите ГОС-номер"
          name="num"
          data-input="num"
          id="num"
        />
        <input
          type="text"
          className="input-tabs"
          placeholder="Укажите VIN-номер"
          name="vin"
          data-input="vin"
          id="vin"
        />
        <input
          type="text"
          className="input-tabs"
          placeholder="Укажите номер кузова"
          name="body"
          data-input="body"
          id="body"
        />
      </div>
      <div className="w-100">
        <div className="form-wrap">
          <div className="item">
            <button
              classNameName="button btn-check"
              onclick="ym(95900406,'reachGoal','SHORT_REPORT')"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6207 15.6543C16.0072 15.2704 16.6268 15.2704 17.0134 15.6543L19.568 17.7164H19.6124C20.1292 18.2388 20.1292 19.0858 19.6124 19.6082C19.0955 20.1306 18.2576 20.1306 17.7407 19.6082L15.6207 17.1785L15.5403 17.0877C15.3904 16.898 15.3076 16.6615 15.3076 16.4164C15.3076 16.1304 15.4203 15.8562 15.6207 15.6543ZM8.57764 0C10.8526 0 13.0343 0.913436 14.6429 2.53936C16.2516 4.16529 17.1553 6.37052 17.1553 8.66993C17.1553 13.4582 13.3149 17.3399 8.57764 17.3399C3.84034 17.3399 0 13.4582 0 8.66993C0 3.88166 3.84034 0 8.57764 0Z"
                  fill="white"
                ></path>
              </svg>
              <span>Проверить</span>
            </button>
          </div>
          <div className="item">
            <a href="/report/example" target="_blank">
              Пример отчёта
            </a>
          </div>
        </div>
      </div>
    </Form>
  );
});
