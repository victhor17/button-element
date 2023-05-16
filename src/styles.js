
import { css } from "lit";

const styles = css`
    :host {
      display: flex;
      color: var(--button-element-text-color, #000);
      flex-direction: column;
    }

    :host([disabled]) {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .button-div {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .button {
        background-color: #1973b6;
        border: none;
        color: #fff;
        padding: 8px 12px;
        font-family: Helvetica,Arial,sans-serif;
        line-height: 24px;
        width: 102px;
    }
    .flex {
        display: flex;
        flex-direction: column;
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