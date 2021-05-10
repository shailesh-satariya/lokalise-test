import React from "react";
import {Alert, Button, Modal} from "react-bootstrap";
import {OptionsType} from "react-select";
import shortid from "shortid";
import {LanguageInfo} from "../../types";
import languages from "../../data/languages.json";
import ReactSelect from "../../components/react-select";
import "./add-language-infos-button.scss";

const languageOptions: OptionsType<any> = languages.map((language) => ({
    value: language.id,
    label: language.name,
    countryCode: language.countryCode
}));

export interface AddLanguageInfosButtonProps {
    addLanguages: (infos: LanguageInfo[]) => void;
}

/**
 * AddLanguageInfosButton component
 *
 * @param addLanguages
 *
 * @constructor
 *
 * @return JSX.Element
 */
const AddLanguageInfosButton: React.FC<AddLanguageInfosButtonProps> = ({addLanguages}: AddLanguageInfosButtonProps): JSX.Element => {
    const [error, setError] = React.useState(null as string | null);
    const [values, setValues] = React.useState([]);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        if (values.length === 0) {
            setError("Select at least one language to add");
        } else {
            setError(null);
            addLanguages(values.map((v: any) => ({
                id: shortid.generate(),
                name: v.label,
                countryCode: v.countryCode,
                done: 345,
                total: 1000,
                unverified: 50000
            })));
            setShow(false);
        }
    };

    return (
        <div className="language-item" data-test="component-add-language-infos-button">
            <Button variant="outline-primary" size="sm" onClick={handleShow} data-test="btn-add-languages">Add
                language</Button>
            <Modal show={show} onHide={handleClose}
                   className="add-languages-modal"
                   data-test="element-modal">
                <Modal.Header closeButton className="text-dark p-0 border-0">Add languages
                </Modal.Header>
                <Modal.Body>
                    {
                        error ?
                            <Alert variant="warning">{error}</Alert> : null
                    }
                    <ReactSelect options={languageOptions} isMulti={true}
                                 placeholder="Select one or more languages"
                                 defaultMenuIsOpen={true}
                                 onChange={(newValue: any) => setValues(newValue)}
                                 classNamePrefix="language-select"
                                 data-test="element-select"/>
                </Modal.Body>
                <Modal.Footer className="border-0 p-0">
                    <Button variant="outline-secondary" size="sm" onClick={handleClose} data-test="btn-cancel">
                        Cancel
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleSave} data-test="btn-add">
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddLanguageInfosButton;