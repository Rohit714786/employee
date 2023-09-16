import React, { useState } from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";
import DatePicker from "react-datepicker";

const SearchEmployee = (props) => {
  const [dob, setDob] = useState(new Date());

  const data = [
    {
      label: "All employee",
      value: "Allemployee",
      expanded: "true",
      children: [
        {
          label: "Rohit Rathore",
          value: "rohit rathore",
          expanded: "true",
        },
        {
          label: "All practitioner",
          value: "Allpractitioner",
          expanded: "true",
          children: [
            {
              label: "Rishi ",
              value: "rishi",
            },
            {
              label: "Rahul",
              value: "rahull",
            },
          ],
        },
        {
          label: "All Assistants",
          value: "AllAssistants",
          expanded: "true",
          children: [
            {
              label: "Alay",
              value: "alay",
            },
            {
              label: "Ashok",
              value: "ashok",
            },
          ],
        },
      ],
    },
  ];

  const onChange = (currentNode, selectedNodes, value) => {
    console.log("onChange::", currentNode, selectedNodes);
  };
  const onAction = (node, action) => {
    console.log("onAction::", action, node);
  };
  const onNodeToggle = (currentNode) => {
    console.log("onNodeToggle::", currentNode);
  };

  return (
    <div className="d-flex flex-md-row flex-sm-column empSearchDiv gap-5">
      <div className="empDropDiv m-5 col-md-5 ">
        <label
          for="drp-tree"
          class="form-label col-md-12 mb-3 headingLabel fs-3"
        >
          Select Employee Dropdown
        </label>
        <DropdownTreeSelect
          id="drp-tree"
          data={data}
          className="empDropdown"
          inlineSearchInput
          texts={{
            placeholder: "Select employee",
            inlineSearchPlaceholder: "Search employee...",
          }}
          onChange={onChange}
          on
          onAction={onAction}
          onNodeToggle={onNodeToggle}
        />
      </div>
      <div className=" col-md-5  align-self-center">
        <label
          for="basic-url3"
          class="form-label col-md-12 mb-3 headingLabel fs-3"
        >
          Date Picker
        </label>
        <DatePicker
          className="form-control dateSearch col-md-12 w-100"
          showIcon
          id="basic-url3"
          scrollableYearDropdow
          placeholderText="Pick Date"
          dateFormat="d-M-yy"
          selected={dob}
          onChange={(date) => setDob(date)}
        />
      </div>
    </div>
  );
};

export default SearchEmployee;
