import { create } from 'zustand';

export const useMembershipStore = create((set, get) => ({
  isCollegeChecked: true,
  selectedMembership: '',
  membershipData: {
    students: {
      name: 'students',
      displayName: 'Student Plan',
      price: 999,
      productID: 'stu-001',
      benefits: [
        'Access to exclusive events, seminars, and workshops',
        'Networking opportunities with peers and professionals',
        'Subscription to student newsletter',
        'Involvement in research and innovation projects',
        'Discounts on educational materials and chapter merchandise',
      ],
    },
    executive: {
      name: 'executive',
      displayName: 'Executive Membership',
      price: 2499,
      productID: 'exe-001',
      benefits: [
        'All student membership benefits',
        'Access to executive-only events and workshops',
        'Leadership and mentorship opportunities',
        'Exclusive career development and networking sessions',
        'Recognition as an executive member in the community',
      ],
    },
  },

  // Setter to update the selected membership
  setSelectedMembership: (membershipType) => set({ selectedMembership: membershipType }),

  // Function to get details of the selected membership plan
  getSelectedPlan: () => {
    const { membershipData, selectedMembership } = get();
    
    // Retrieve plan details for the selected membership
    const selectedPlan = membershipData[selectedMembership];
    
    if (selectedPlan) {
      return {
        name: selectedPlan.name,
        productID: selectedPlan.productID,
        displayName:selectedPlan.displayName, 
        price: selectedPlan.price,
        benefits: selectedPlan.benefits,
      };
    }
    
    // Return null if no plan is found
    return null;
  },
}));
