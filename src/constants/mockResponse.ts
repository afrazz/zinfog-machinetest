export const mockOrdersResponse = [
    {
      bill_date: "2023-05-27",
      bill_no: "45122",
      date: "2023-05-24",
      doctor: "JOHN",
      eta: "2023-05-24 17:23:19",
      has_result: true,
      hospital_id: "98456",
      is_eta_crossed: false,
      lab: "Aswini Hospital Thrissur",
      order_id: 13936,
      order_ref: "A13670",
      orderline_id: 47038,
      patient_details: {
        age: 0,
        bill_date: "2023-05-27",
        bill_no: "45122",
        gender: false,
        patient_name: "NANCY",
      },
      patient_name: "NANCY",
      result: [
        {
          attachment:
            "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/05834e3ec6f95871be56f5eb711a1c84cf4337be",
          id: 124240,
          line_id: 47038,
        },
      ],
      status: "Ready",
      test_name: "*Rapid Dengue Test (NS1 Ag & IgM/IgG Ab)",
    },
    {
      bill_date: "2023-06-01",
      bill_no: "45123",
      date: "2023-05-25",
      doctor: "SMITH",
      eta: "2023-05-25 14:23:19",
      has_result: true,
      hospital_id: "98457",
      is_eta_crossed: false,
      lab: "Aswini Hospital Thrissur",
      order_id: 13937,
      order_ref: "A13671",
      orderline_id: 47039,
      patient_details: {
        age: 1,
        bill_date: "2023-06-01",
        bill_no: "45123",
        gender: true,
        patient_name: "MIKE",
      },
      patient_name: "MIKE",
      result: [
        {
          attachment:
            "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/abc123",
          id: 124241,
          line_id: 47039,
        },
      ],
      status: "Ready",
      test_name: "Complete Blood Count (CBC)",
    },
    {
      bill_date: "2023-06-05",
      bill_no: "45124",
      date: "2023-05-26",
      doctor: "DOE",
      eta: "2023-05-26 10:23:19",
      has_result: false,
      hospital_id: "98458",
      is_eta_crossed: true,
      lab: "City Hospital",
      order_id: 13938,
      order_ref: "A13672",
      orderline_id: 47040,
      patient_details: {
        age: 2,
        bill_date: "2023-06-05",
        bill_no: "45124",
        gender: true,
        patient_name: "SARA",
      },
      patient_name: "SARA",
      result: [],
      status: "Ready",
      test_name: "Lipid Profile",
    },
    {
      bill_date: "2023-06-10",
      bill_no: "45125",
      date: "2023-05-27",
      doctor: "WILLIAMS",
      eta: "2023-05-27 09:23:19",
      has_result: true,
      hospital_id: "98459",
      is_eta_crossed: false,
      lab: "Green Hospital",
      order_id: 13939,
      order_ref: "A13673",
      orderline_id: 47041,
      patient_details: {
        age: 3,
        bill_date: "2023-06-10",
        bill_no: "45125",
        gender: false,
        patient_name: "LUCAS",
      },
      patient_name: "LUCAS",
      result: [
        {
          attachment:
            "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/def456",
          id: 124242,
          line_id: 47041,
        },
      ],
      status: "Ready",
      test_name: "Thyroid Function Test",
    },
    {
      bill_date: "2023-06-15",
      bill_no: "45126",
      date: "2023-05-28",
      doctor: "BROWN",
      eta: "2023-05-28 08:23:19",
      has_result: true,
      hospital_id: "98460",
      is_eta_crossed: false,
      lab: "Apollo Hospital",
      order_id: 13940,
      order_ref: "A13674",
      orderline_id: 47042,
      patient_details: {
        age: 4,
        bill_date: "2023-06-15",
        bill_no: "45126",
        gender: true,
        patient_name: "EMMA",
      },
      patient_name: "EMMA",
      result: [
        {
          attachment:
            "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/ghi789",
          id: 124243,
          line_id: 47042,
        },
      ],
      status: "Ready",
      test_name: "Blood Glucose Test",
    },
    {
      bill_date: "2023-06-20",
      bill_no: "45127",
      date: "2023-05-29",
      doctor: "DAVIS",
      eta: "2023-05-29 07:23:19",
      has_result: true,
      hospital_id: "98461",
      is_eta_crossed: false,
      lab: "Fortis Hospital",
      order_id: 13941,
      order_ref: "A13675",
      orderline_id: 47043,
      patient_details: {
        age: 5,
        bill_date: "2023-06-20",
        bill_no: "45127",
        gender: true,
        patient_name: "SOPHIA",
      },
      patient_name: "SOPHIA",
      result: [
        {
          attachment:
            "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/jkl012",
          id: 124244,
          line_id: 47043,
        },
      ],
      status: "Lab dropped",
      test_name: "Liver Function Test",
    },
    {
      bill_date: "2023-06-25",
      bill_no: "45128",
      date: "2023-05-30",
      doctor: "MILLER",
      eta: "2023-05-30 06:23:19",
      has_result: false,
      hospital_id: "98462",
      is_eta_crossed: true,
      lab: "Narayana Hospital",
      order_id: 13942,
      order_ref: "A13676",
      orderline_id: 47044,
      patient_details: {
        age: 6,
        bill_date: "2023-06-25",
        bill_no: "45128",
        gender: false,
        patient_name: "JACK",
      },
      patient_name: "JACK",
      result: [],
      status: "Ready",
      test_name: "Kidney Function Test",
    },
    {
      bill_date: "2023-06-30",
      bill_no: "45129",
      date: "2023-05-31",
      doctor: "MOORE",
      eta: "2023-05-31 05:23:19",
      has_result: true,
      hospital_id: "98463",
      is_eta_crossed: false,
      lab: "Max Hospital",
      order_id: 13943,
      order_ref: "A13677",
      orderline_id: 47045,
      patient_details: {
        age: 7,
        bill_date: "2023-06-30",
        bill_no: "45129",
        gender: true,
        patient_name: "OLIVER",
      },
      patient_name: "OLIVER",
      result: [
        {
          attachment:
            "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/mno345",
          id: 124245,
          line_id: 47045,
        },
      ],
      status: "Partial Report",
      test_name: "Hemoglobin Test",
    },
    {
      bill_date: "2023-07-05",
      bill_no: "45130",
      date: "2023-06-01",
      doctor: "TAYLOR",
      eta: "2023-06-01 04:23:19",
      has_result: true,
      hospital_id: "98464",
      is_eta_crossed: false,
      lab: "Manipal Hospital",
      order_id: 13944,
      order_ref: "A13678",
      orderline_id: 47046,
      patient_details: {
        age: 8,
        bill_date: "2023-07-05",
        bill_no: "45130",
        gender: true,
        patient_name: "AVA",
      },
      patient_name: "AVA",
      result: [
        {
          attachment:
            "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/pqr678",
          id: 124246,
          line_id: 47046,
        },
      ],
      status: "Ready",
      test_name: "Vitamin D Test",
    },
    {
      bill_date: "2023-07-10",
      bill_no: "45131",
      date: "2023-06-02",
      doctor: "ANDERSON",
      eta: "2023-06-02 03:23:19",
      has_result: false,
      hospital_id: "98465",
      is_eta_crossed: true,
      lab: "KIMS Hospital",
      order_id: 13945,
      order_ref: "A13679",
      orderline_id: 47047,
      patient_details: {
        age: 9,
        bill_date: "2023-07-10",
        bill_no: "45131",
        gender: false,
        patient_name: "JAMES",
      },
      patient_name: "JAMES",
      result: [],
      status: "Partial Report",
      test_name: "Calcium Test",
    },
  ];
  