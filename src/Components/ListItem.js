import React, { useState } from "react";

const ListItem = ({ props }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProps, setEditedProps] = useState({ ...props });

  const handleDelete = async () => {
    await fetch(`https://sweede.app/DeliveryBoy/delete-Employee/${props.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  const detailedView = `
  First Name: ${props.FirstName}
  Last Name: ${props.LastName}
  Date of Birth: ${props.DOB}
  Start Date: ${props.StartDate}
  End Date: ${props.EndDate}
  Description: ${props.Description}
`;
  const handleView = () => {
    alert(detailedView);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Perform the save operation with the updated data (editedProps)
    // For example, you can make a fetch request to update the item on the server.
    // After saving, you can exit edit mode by setting isEditing to false.
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Cancel the editing and revert to the original data (props)
    setEditedProps({ ...props });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    // Update the editedProps when input fields change
    const { name, value } = e.target;
    setEditedProps({ ...editedProps, [name]: value });
  };

  return (
    <tr className="listBody">
      <th scope="row" className="fw-bolder">
        {isEditing ? (
          <input
            type="text"
            name="FirstName"
            value={editedProps.FirstName}
            onChange={handleInputChange}
          />
        ) : (
          `${props.FirstName} ${props.LastName}`
        )}
      </th>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="DOB"
            value={editedProps.DOB}
            onChange={handleInputChange}
          />
        ) : (
          props.DOB
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="StartDate"
            value={editedProps.StartDate}
            onChange={handleInputChange}
          />
        ) : (
          props.StartDate
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="EndDate"
            value={editedProps.EndDate}
            onChange={handleInputChange}
          />
        ) : (
          props.EndDate
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="Description"
            value={editedProps.Description}
            onChange={handleInputChange}
          />
        ) : (
          props.Description
        )}
      </td>
      <td>
        <div className="dropdown dropstart">
          <button
            className="btn border-0 fa-solid fa-ellipsis-vertical"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a className="dropdown-item" onClick={handleView}>
                <i className="fa-solid fa-eye"></i> View
              </a>
            </li>
            <hr className="my-1" />
            <li>
              <a className="dropdown-item" onClick={handleEdit}>
                <i className="fa-solid fa-pen"></i> Edit
              </a>
            </li>
            <hr className="my-1" />
            <li>
              <a className="dropdown-item" onClick={handleDelete} href="#">
                <i className="fa-solid fa-trash"></i> Delete
              </a>
            </li>
          </ul>
        </div>
        {isEditing && (
          <>
            <a className="btn btn-success" onClick={handleSave}>
              Save
            </a>
            <a className="btn btn-danger" onClick={handleCancel}>
              Cancel
            </a>
          </>
        )}
      </td>
    </tr>
  );
};

export default ListItem;
