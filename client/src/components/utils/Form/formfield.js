import React from 'react';
import {Link} from "react-router-dom";

const Formfield = ({formdata, change, id}) => {

    const renderTemplate = () => {

        let formTemplate = '';
        switch(formdata.element) {
            case 'input':
                formTemplate = (
                    <div className='formBlock'>
                        <Input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event)=> change({event, id, blur: true})}
                            onChange={(event)=> change({event, id})}
                        >

                        </Input>
                    </div>
                )
                break;
            default:
                formTemplate='';
        }

        return formTemplate;


    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default Formfield;