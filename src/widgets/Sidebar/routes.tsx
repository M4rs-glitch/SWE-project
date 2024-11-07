import { AiOutlineUnorderedList } from 'react-icons/ai';
import { privateRoutesMap } from '../../shared/navigation';
import React from 'react';
import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
type MenuItem = Required<MenuProps>['items'][number];
export const sidebarItems: MenuItem[] = [
  {
    key: 'duty',
    type: 'group',
    label: 'Профиль',
    children: [
      {
        key: privateRoutesMap.home,
        type: 'item',
        label: 'Мой профиль',
        icon: <AiOutlineUnorderedList />,
      },
    ],
  },
];

export const collapsedSidebarItems = sidebarItems.reduce<ItemType[]>(
  (menu, group) => {
    if (group && group.type === 'group' && group.children) {
      return [...menu, ...group.children];
    }
    return menu;
  },
  []
);
