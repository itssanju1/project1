import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Eex from '../Navbaar/Eex'
import NewAdmission from '../New Admission/NewAdmission'
import Individual from '../Individual/Individual'
import Corporate from '../Coparate/Corporate'
import Application from '../Application Status/Application'
import Roles from '../Roles/Roles'
import Addindividualdta from '../Dashboard/Add Indiviual/Addindividualdta'
import StateorPincode from '../Dashboard/Add Indiviual/Personal Information/StateorPincode'
import PatientdetailsPolicyHolder from '../Dashboard/Add Indiviual/Personal Information/PatientdetailsPolicyHolder'
import KYCDetails from '../Dashboard/Add Indiviual/Personal Information/KYCDetails'
import KYCDetails1 from '../Dashboard/Add Indiviual/Personal Information/KYCDetails1'
import Lendingmodule from '../Dashboard/Add Indiviual/Creadit Document Information/Lendingmodule'
import Cancelledcheque from '../Dashboard/Add Indiviual/Creadit Document Information/Cancelledcheque'
import Medicaldec from '../Dashboard/Add Indiviual/MEdical Dedaration Information/Medicaldec'
import Plicydocument from '../Dashboard/Add Indiviual/Policy Document Information/Plicydocument'
import Addcorporate from '../Dashboard/Add Corporate/Addcorporate'
import CpmpanyDetails from '../Dashboard/Add Corporate/Company Details/CpmpanyDetails'
import PatientdetailPlicyHolderCorporate from '../Dashboard/Add Corporate/Personal Information/PatientdetailPlicyHolderCorporate'
import KycDetailCorporate1 from '../Dashboard/Add Corporate/Personal Information/KycDetailCorporate1'
import KycDetailCorporate2 from '../Dashboard/Add Corporate/Personal Information/KycDetailCorporate2'
import LendingmoduleCorporate from '../Dashboard/Add Corporate/Credit Document Information/LendingmoduleCorporate'
import Uploadcencelledcheque from '../Dashboard/Add Corporate/Credit Document Information/Uploadcencelledcheque'
import MedicalDedarationInformation from '../Dashboard/Add Corporate/Medical Dedaration Information/MedicalDedarationInformation'
import PolicyDocumentInformation from '../Dashboard/Add Corporate/Policy Document Information/PolicyDocumentInformation'


const Navbarrouting = () => {
  return (
    <>
    <BrowserRouter>
    {/* <Navbarmain/> */}
    <Eex/>
    <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/NewAdmission' element={<NewAdmission/>}/>
        <Route path='/Individual' element={<Individual/>}/>
        <Route path='/Coporate' element={<Corporate/>}/>
        <Route path='/ApplicationStatus' element={<Application/>}/>
        <Route path='/Roles' element={<Roles/>}/>
        <Route path='/Addindividual' element={<Addindividualdta/>}/>
        <Route path='/Personalinformation' element={<StateorPincode/>}/>
        <Route path='/Patientdetailpolicyholder' element={<PatientdetailsPolicyHolder/>}/>
        <Route path='/Kycdetail' element={<KYCDetails/>}/>
        <Route path='/Kycdetails1' element={<KYCDetails1/>}/>
        <Route path='/Creditdocumentinformation' element={<Lendingmodule/>}/>
        <Route path='/Uploadcancelledcheque'  element={<Cancelledcheque/>}/>
        <Route path='/Medicaldeclation' element={<Medicaldec/>}/>
        <Route path='/Policydocument' element={<Plicydocument/>}/>
        <Route path='/Addcorporate' element={<Addcorporate/>}/>
        <Route path='/companydetails' element={<CpmpanyDetails/>}/>
        <Route path='//Personalinformationcorporate' element={<PatientdetailPlicyHolderCorporate/>}/>
       <Route path='/kycdetailcorporate' element={<KycDetailCorporate1/>}/>
       <Route path='/KycDetailCorporate2' element={<KycDetailCorporate2/>}/>
       <Route path='Creditdocumentinformationcorporate' element={<LendingmoduleCorporate/>}/>
       <Route path='Uploadcancelledchequecorporate' element={<Uploadcencelledcheque/>}/>
       <Route path='/Medicaldeclationcorporate' element={<MedicalDedarationInformation/>}/>
       <Route path='/Policydocumentcorporate' element={<PolicyDocumentInformation/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Navbarrouting