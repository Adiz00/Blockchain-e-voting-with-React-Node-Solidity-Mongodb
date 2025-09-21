import { Button, Picker, Select, Switch, Text, TextField } from '../../components'
import { Row, Col, Form } from 'antd'
import { Controller, useFormContext, FormProvider } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import CheckBoxField from '../../components/Select/Checkbox.tsx';


const schema = yup.object().shape({
    // input: yup.string().required()
    // fullName: yup.number()

});

let defaultValue = {
    allow: "",
    datepickr: "2023-05-01",
    input: "",
    radioGroup: "",
    select: "",
    switch: "",
    textArea: ""


}

const Form1 = () => {

    const methods = useFormContext();
    const { formState: { errors }, control, setValue, handleSubmit } = methods;

    function onChangeDate(date, dateString) {
        setValue("datepickr", dateString)
    }
    console.log("errors1,", errors);
    return (
        <div className='container' style={{
            paddingLeft: "25%",
            paddingRight: "25%"
        }} >

            <Row style={{ textAlign: "center" }} justify={"center"} >
                <Col>
                    <h1>Form1</h1>
                </Col>
            </Row>

            <Row gutter={[16, 10]}>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>CheckBox</span>
                </Col>

                <Col xs={24}>
                    <Controller
                        name="checkBox"
                        type="checkbox"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <CheckBoxField
                                label="price"
                                checked={value}
                                onChange={(ev) => onChange(ev.target.checked)}

                            />

                        )}
                    />
                    <span style={{ color: "red" }}>{errors?.checkBox?.message}</span>
                </Col>

                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Gender</span>
                </Col>
                <Col xs={24}>
                    <Controller
                        name="radioGroup"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <Select.Radio
                                label={"Gender"}
                                options={["Male", "Female"]}
                                onChange={(e) => onChange(e.target.value)}
                            />
                        )}

                    />

                    <span style={{ color: "red" }}>{errors?.radioGroup?.message}</span>
                </Col>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Input</span>
                </Col>

                <Col xs={24}>
                    <Controller
                        name="input"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <TextField.Basic
                                // label={"Input"}
                                onChange={(e) => onChange(e.target.value)}
                            />
                        )}
                    />
                    <span style={{ color: "red" }}>  {errors?.input?.message}</span>
                </Col>

                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Select</span>
                </Col>
                <Col xs={24}>
                    <Controller
                        name="select"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <TextField.SelectField
                                value={value}
                                size={"large"}
                                style={{ width: "150px" }}
                                defaultValue="lucy"
                                placeholder={"select"}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'Yiminghe', label: 'yiminghe' },

                                ]}
                                onChange={onChange}

                            />


                        )}
                    />
                    <span style={{ color: "red" }}>  {errors?.select?.message}</span>
                </Col>

                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>DatePicker</span>
                </Col>
                <Col xs={24}>
                    <Picker.DatePicker
                        onChange={onChangeDate}
                        format={'YYYY-MM-DD'}
                    />
                    <span style={{ color: "red" }}>{errors?.datepickr?.message}</span>
                </Col>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Switch</span>
                </Col>

                <Col xs={24}>
                    <Controller
                        name="switch"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <Switch.Basic
                                checked={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                size={"large"}
                            // label="Switch"
                            />
                        )}
                    />
                    <span style={{ color: "red" }}>{errors?.switch?.message}</span>
                </Col>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>TextArea</span>
                </Col>
                <Col xs={24}>
                    <Controller
                        name="textArea"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <TextField.Textarea
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                                placeholder={"Text Area"}
                            />
                        )}
                    />
                    <span style={{ color: "red" }}> {errors?.textArea?.message}</span>
                </Col>



            </Row>

        </div>
    )
}

export default Form1