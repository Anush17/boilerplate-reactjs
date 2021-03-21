import React from "react";
import PropTypes from 'prop-types';
import {Toast} from 'react-bootstrap';

import NotificationTypes from "../../constants/NotificationTypes";

const {Body} = Toast;

const AlertMessage = ({text, show, variant, onClose}) => (
    <div
        style={{
            top: 0,
            right: '-100%',
            position: 'absolute',
        }}
    >
        <Toast
            autohide
            delay={4000}
            show={show}
            onClose={onClose}
            style={{
                color: "#fff",
                backgroundColor: variant === NotificationTypes.SUCCESS ? "#40af44" : "red"
            }}>
            <Body>{text}</Body>
        </Toast>
    </div>
)

AlertMessage.propTypes = {
    show: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired
};

export default AlertMessage;
