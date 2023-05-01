import * as Yup from "yup";

export const validationSchemaAddAlarm = Yup.object().shape({
  DeviceId: Yup.string().required("* Device is required"),
  Label: Yup.string()
    .required("* Alarm label is required")
    .max(50, "Must be max 50 digits"),
  Severity: Yup.string().required("* Severity is required"),
  Conditions: Yup.array().of(
    Yup.object().shape({
      AttributeName: Yup.string().required("* Attribute is required"),
      Condition: Yup.string().required("* Condition is required"),
      AttributeType: Yup.string().required("* Type condition is required"),
      Value: Yup.string()
        .required("* Value is required")
        .max(50, "Must be max 50 digits"),
    })
  ),
});
