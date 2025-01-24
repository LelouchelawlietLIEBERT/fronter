import React from "react";
import "./App.css";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(
        `https://flasker-lake.vercel.app/delete_contact/${id}`,
        options
      );
      if (response.status === 200) {
        updateCallback();
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      alert(error);
    }
  };

  const a = contacts.length === 0 ? "" : "First Name";
  const h = contacts.length === 0 ? "CONTACT LIST IS EMPTY!!" : "CONTACTS";
  const b = contacts.length === 0 ? "" : "Last Name";
  const c = contacts.length === 0 ? "" : "Email";
  const d = contacts.length === 0 ? "" : "Actions";
  const ac = a === "" ? styles.Damn : styles.damn;
  return (
    <div>
      <h1 className={styles.woodtext}>{h}</h1>
      <table className={styles.container}>
        <thead>
          <tr>
            <th className={ac}>{a}</th>
            <th className={ac}>{b}</th>
            <th className={ac}>{c}</th>
            <th className={ac}>{d}</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <div className="btn-delup">
                  <button
                    className="button-85"
                    onClick={() => updateContact(contact)}
                  >
                    Update
                  </button>
                  <button
                    className="button-86"
                    onClick={() => onDelete(contact.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
