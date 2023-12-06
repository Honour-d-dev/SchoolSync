'use client';
import React, { useState, useContext, createContext } from 'react';
import type { navType, footer1, footer2, footer3 } from '@/lib/types';

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionType = {
  isActive: navType;
  setIsActive: React.Dispatch<React.SetStateAction<navType>>;
  footerActive: footer1;
  setIsFooterActive: React.Dispatch<React.SetStateAction<footer1>>;
  footer2Active: footer2;
  setIsFooter2Active: React.Dispatch<React.SetStateAction<footer2>>;
  footer3Active: footer3;
  setIsFooter3Active: React.Dispatch<React.SetStateAction<footer3>>;
  isStaffClicked: boolean;
  setIsStaffClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isStudentClicked: boolean;
  setIsStudentClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isSchoolClicked: boolean;
  setIsSchoolClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isButtonEnabled: boolean;
  setIsButtonEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActiveSectionContext = createContext<ActiveSectionType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionProviderProps) => {
  const [isActive, setIsActive] = useState<navType>('Home');
  const [footerActive, setIsFooterActive] = useState<footer1>('Features');
  const [footer2Active, setIsFooter2Active] = useState<footer2>('Pricing');
  const [footer3Active, setIsFooter3Active] =
    useState<footer3>('Privacy Policy');
  const [isStaffClicked, setIsStaffClicked] = useState<boolean>(false);
  const [isStudentClicked, setIsStudentClicked] = useState<boolean>(false);
  const [isSchoolClicked, setIsSchoolClicked] = useState<boolean>(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  return (
    <ActiveSectionContext.Provider
      value={{
        isActive,
        setIsActive,
        footerActive,
        setIsFooterActive,
        footer2Active,
        setIsFooter2Active,
        footer3Active,
        setIsFooter3Active,
        isStaffClicked,
        setIsStaffClicked,
        isStudentClicked,
        setIsStudentClicked,
        isSchoolClicked,
        setIsSchoolClicked,
        isButtonEnabled,
        setIsButtonEnabled,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
};

export default ActiveSectionContextProvider;
