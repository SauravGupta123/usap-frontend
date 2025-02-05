import { Option, Select } from '@material-tailwind/react';
import React from 'react';
import { useContextValue } from '../Context';

const MembershipType = () => {
  const { state, dispatch } = useContextValue();
  const handlemembership = (value) => {};
  console.log('type', state.package);
  return (
    <Select
      label={
        <>
          Type of Membership <span className='text-red-400'>*</span>
        </>
      }
      value={state.package}
      size='lg'
      onChange={handlemembership}
    >
      <Option value='student'>Student Membership</Option>
      <Option value='professional'>Professional Membership</Option>
      <Option value='lifetime'>Lifetime Membership</Option>
      <Option value='faculty'>Faculty Membership</Option>
    </Select>
  );
};

export default MembershipType;
