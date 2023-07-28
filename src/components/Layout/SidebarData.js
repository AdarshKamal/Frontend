import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Dashboard',
         path: '/Homepage/user/main',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Items',
         path: '/Homepage/user/quiz',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Banking',
         path: '/Homepage/user/result',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },

  {
    title: 'Sales',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Customers',
        path: '/inventry/user/Customer',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Sale Order',
        path: '/inventry/user/salesOrder',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Invoices',
        path: '/inventry/user/invoices',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Delivery Challans',
        path: '/inventry/user/deliverychalans',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'PaymentReceived',
        path: '/inventry/user/paymentreceived',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Purchases',
    // path: '/Reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Vendors',
        path: '/inventry/user/vendors',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Expenses',
        path: '/inventry/user/expenses',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Purchase Order',
        path: '/inventry/user/purchaseorder',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Payments Made',
        path: '/inventry/user/paymentmade',
        icon: <FaIcons.FaCartPlus />
      },
      {
        title: 'Bills',
        path: '/inventry/user/bills',
        icon: <IoIcons.IoMdPeople />
      },
    ]
  },
 
  {
    title: 'Accountant',
    
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Manual Journals',
        path: '/inventry/user/manualjournal',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Currency Convertor',
        path: '/inventry/user/currencyConverterP',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/inventry/user/reports',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Payroll',
    path: '/inventry/user/payroll',
    icon: <IoIcons.IoMdHelpCircle />
  },

];