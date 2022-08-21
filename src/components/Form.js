import React, { useState } from 'react';
import { useFormik } from 'formik';
import './Style.css';



function Form() {
  const [arrayValue, setArrayValue] = useState([]);
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      fullName: '',
      dateBirth: '',
      sex: '',
      mobile: '',
      govtIdType: '',
      govtId: '',
      guardianDetails: '',
      email: '',
      emergencyContact: '',
      address: '',
      state: '',
      city: '',
      country: '',
      pincode: '',
      occupation: '',
      religion: '',
      maritalStatus: '',
      bloodGroup: '',
      nationality: '',
    },


    onSubmit: (values, { resetForm }) => {

      // alert(JSON.stringify(values, null, 2));
      // let newArray=[...Object.values(JSON.stringify(values))];
      let newArray = [];
      newArray.push(values);
      setArrayValue([...arrayValue, ...newArray]);
      console.log("value is", arrayValue);
      resetForm({ values: '' });
    },

  });



  return (
    <>
      <div className="container mt-3 form-container ">
        <form onSubmit={formik.handleSubmit}>
          <h4 className=' container d-flex align-items-start justify-content-start '><u>Personal Details</u></h4>
          <div className=" d-flex flex-row align-items-start justify-content-start gap-5 ms-5 mb-3">

            <div>

              <label htmlFor="fullName"> Name<span className='red-star'>*</span></label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder='Enter Name'
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />

            </div>

            <div>
              <label htmlFor="dateBirth">Date of Birth or Age<span className='red-star'>*</span></label>
              <input
                id="dateBirth"
                name="dateBirth"
                type="date"
                placeholder='DD/MM/YYYY or Age in years'
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />


            </div>
            <div className='sex-container'>
              <label for="sex">Sex<span className='red-star'>*</span></label>
              <select id="sex" name="sex" value={formik.values.sex} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>Enter sex</option>
                <option value="male" >Male</option>
                <option value="female" >Female</option>

              </select>

            </div>
          </div>
          <div className=" d-flex flex-row align-items-start justify-content-start gap-5 ms-5 mb-3">
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                id="mobile"
                name="mobile"
                type="number"
                placeholder='Enter mobile'
                maxlength="10"
                size="10"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />

            </div>
            <div >
              <label htmlFor="govtIdType">Govt Issued ID</label>
              <select id="govtIdType" name="govtIdType" value={formik.values.govtIdType} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>ID Type</option>
                <option value="aadhaar">Aadhaar card</option>
                <option value="pan">Pan card</option>

              </select>
              <input
                id="govtId"
                name="govtId"
                type="number"
                maxlength="10"
                size="10"
                placeholder='Enter Govt ID'
                onChange={formik.handleChange}
                value={formik.values.govtId}
              />

            </div>
          </div>

          <h4 className='container d-flex align-items-start justify-content-start'><u>Contact Details</u></h4>
          <div className="d-flex flex-row align-items-start justify-content-start gap-5 ms-5 mb-3">
            <div >
              <label htmlFor="guardianDetails">Guardian  Details</label>

              <input
                id="guardianDetails"
                name="guardianDetails"
                type="text"
                placeholder='Enter Guardian Name'
                size="12"
                onChange={formik.handleChange}
                value={formik.values.guardianDetails}
              />

            </div>
            <div >
              <label htmlFor="email" className='email-label'>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Enter email'
                size="15"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

            </div>
            <div >
              <label htmlFor="emergencyContact">Emergency Contact Number</label>
              <input
                id="emergencyContact"
                name="emergencyContact"
                type="number"
                placeholder='Enter Emergency No.'
                className='emergency-contact'
                onChange={formik.handleChange}
                value={formik.values.emergencyContact}
              />

            </div>
          </div>
          <h4 className='container d-flex align-items-start justify-content-start'><u>Address Details</u></h4>
          <div className="d-flex flex-row align-items-start justify-content-start gap-5 ms-5 mb-3">
            <div>
              <label htmlFor="address"> Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder='Enter Address'
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>
            <div>
              <label for="state">State</label>
              <select id="state" name="state" value={formik.values.state} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>Enter state</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>

              </select>
            </div>
            <div className='city-container'>
              <label for="city">City</label>
              <select id="city" name="city" value={formik.values.city} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>Enter city </option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>

              </select>
            </div>
          </div>
          <div className="d-flex flex-row align-items-start justify-content-start gap-5 ms-5 mb-3">
            <div>
              <label for="country">Country</label>
              <select id="country" name="country" value={formik.values.country} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>Enter country</option>
                <option value="india">India</option>
                <option value="uk">UK</option>

              </select>
            </div>
            <div className='pincode-container'>
              <label htmlFor="pincode"> Pincode</label>
              <input
                id="pincode"
                name="pincode"
                type="number"
                placeholder='Enter pincode '
                onChange={formik.handleChange}
                value={formik.values.pincode}
              />

            </div>
          </div>


          <h4 className='container d-flex align-items-start justify-content-start'><u>Other Details</u></h4>
          <div className="d-flex flex-row align-items-start justify-content-start gap-5 ms-5 mb-3">
            <div>
              <label htmlFor="occupation"> Occupation</label>
              <input
                id="occupation"
                name="occupation"
                type="text"
                placeholder='Enter occupation '
                size="10"
                onChange={formik.handleChange}
                value={formik.values.occupation}
              />
            </div>
            <div>
              <label for="religion">Religion</label>
              <select id="religion" name="religion" value={formik.values.religion} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>Enter Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="sikh">Sikh</option>
                <option value="christian">Christian</option>

              </select>
            </div>

            <div>
              <label for="maritalStatus">Marital Status</label>
              <select id="maritalStatus" name="maritalStatus" value={formik.values.maritalStatus} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>Enter Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>


              </select>
            </div>
            <div>
              <label for="bloodGroup">Blood Group</label>
              <select id="bloodGroup" name="bloodGroup" value={formik.values.bloodGroup} className="select-container" onChange={formik.handleChange}>
                <option value="" className="placeholder" disabled selected>Group</option>
                <option value="b+">b+</option>
                <option value="ab+">ab+</option>


              </select>
            </div>
          </div>
          <div className="d-flex flex-row align-items-start justify-content-start gap-5 ms-5 mb-3">
            <div>
              <label for="nationality">Nationality</label>
              <select id="nationality" name="nationality" value={formik.values.nationality} className="select-container" onChange={formik.handleChange}>
                <option value="indian">Indian</option>
                <option value="abroad">Abraod</option>


              </select>
            </div>
          </div>

          <div className="d-flex flex-row align-items-end justify-content-end gap-5 mb-3">
            <button type="reset" className='btn-cancel'>CANCEL</button>
            <button type="submit" className='btn-submit'>SUBMIT</button>
          </div>
        </form>
      </div>

      <div className="container table-container mt-2">
        <table className='table table-striped table-dark'>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">DateOfBirth</th>
              <th scope="col">Sex</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Occupation</th>
              <th scope="col">Guardian</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Pincode</th>
            </tr>
          </thead>
          {arrayValue.length > 0 && arrayValue.map((item, index) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{item.fullName}</td>
                    <td>{item.dateBirth}</td>
                    <td>{item.sex}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.occupation}</td>
                    <td>{item.guardianDetails}</td>
                    <td>{item.state}</td>
                    <td>{item.country}</td>
                    <td>{item.pincode}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>



    </>
  );
};




export default Form;
