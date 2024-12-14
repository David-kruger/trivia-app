import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export const Header = ({ name, points }) => {
  const items = [
    {
      label: `${name} `,
      icon: "pi pi-user",
    },
    {
      label: `points: ${points }`,
      icon: "pi pi-check",
    },
  ];

  return (
    <>
      <div className="card">
            <TabMenu model={items} />
        </div>
    </>
  );
};







        




