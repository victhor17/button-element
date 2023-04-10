import { css } from "lit";


const styles = css`
    :host {
      display: flex;
      color: var(--button-element-text-color, #000);
      flex-direction: column;
    }

    .button-div {
        display: flex;
        background-color: #1973b6;
    }
    .button {
        background-color: inherit;
        border: none;
        color: #fff;
        padding: 8px 12px;
        font-family: Helvetica,Arial,sans-serif;
        line-height: 24px;
    }
    .flex {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: #d8dad1;
    }
    .input-container {
        display: flex;
        padding: 6px;
        height: 36px;
    }
`;

export default styles;