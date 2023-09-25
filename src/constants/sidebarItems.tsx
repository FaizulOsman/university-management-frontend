import type { MenuProps } from "antd";
import { ProfileOutlined, TableOutlined } from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: `/${role}/manage-student`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      key: `/${role}/manage-faculty`,
      icon: <TableOutlined />,
    },
  ];

  if (role === "student") return defaultSidebarItems;
  else if (role === "admin") return commonAdminSidebarItems;
};
