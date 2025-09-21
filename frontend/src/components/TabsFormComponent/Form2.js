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
    checkBox2: "",
    datepickr2: "2023-05-01",
    input2: "",
    radioGroup2: "",
    select2: "",
    switch2: "",
    textArea2: ""


}

const Form2 = () => {

    const methods = useFormContext();
    const { formState: { errors }, control, setValue, handleSubmit } = methods;

    function onChangeDate(date, dateString) {
        setValue("datepickr2", dateString)
    }
    console.log(errors);
    return (
        <div className='container' style={{
            paddingLeft: "25%",
            paddingRight: "25%"
        }} >

            <Row style={{ textAlign: "center" }} justify={"center"} >
                <Col>
                    <h1>Form2</h1>
                </Col>
            </Row>

            <Row gutter={[16, 10]}>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>CheckBox</span>
                </Col>

                <Col xs={24}>
                    <Controller
                        name="checkBox2"
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
                    <span style={{ color: "red" }}>{errors?.checkBox2?.message}</span>
                </Col>

                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Gender</span>
                </Col>
                <Col xs={24}>
                    <Controller
                        name="radioGroup2"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <Select.Radio
                                label={"Gender"}
                                options={["Male", "Female"]}
                                onChange={(e) => onChange(e.target.value)}
                            />
                        )}

                    />

                    <span style={{ color: "red" }}>{errors?.radioGroup2?.message}</span>
                </Col>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Input</span>
                </Col>

                <Col xs={24}>
                    <Controller
                        name="input2"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <TextField.Basic
                                // label={"Input"}
                                onChange={(e) => onChange(e.target.value)}
                            />
                        )}
                    />
                    <span style={{ color: "red" }}>  {errors?.input2?.message}</span>
                </Col>

                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Select</span>
                </Col>
                <Col xs={24}>
                    <Controller
                        name="select2"
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
                    <span style={{ color: "red" }}>  {errors?.select2?.message}</span>
                </Col>

                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>DatePicker</span>
                </Col>
                <Col xs={24}>
                    <Picker.DatePicker
                        onChange={onChangeDate}
                        format={'YYYY-MM-DD'}
                    />
                    <span style={{ color: "red" }}>{errors?.datepickr2?.message}</span>
                </Col>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>Switch</span>
                </Col>

                <Col xs={24}>
                    <Controller
                        name="switch2"
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
                    <span style={{ color: "red" }}>{errors?.switch2?.message}</span>
                </Col>
                <Col xs={24}>
                    <span style={{ color: "black", fontWeight: "bold" }}>TextArea</span>
                </Col>
                <Col xs={24}>
                    <Controller
                        name="textArea2"
                        control={control}
                        render={({ field: { onChange, value, onBlur, ref } }) => (
                            <TextField.Textarea
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                                placeholder={"Text Area"}
                            />
                        )}
                    />
                    <span style={{ color: "red" }}> {errors?.textArea2?.message}</span>
                </Col>

              

            </Row>

        </div>
    )
}

export default Form2