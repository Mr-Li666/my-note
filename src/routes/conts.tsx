import {
  AlgorithmsComplexity,
  BidirectionalLink,
  BinarySearchTreeComponent,
  BubbleSort,
  ChooseSort,
  ErrorPage,
  Home,
  InsertSort,
  QueneComponent,
  QuickSort,
  Root,
  SinglyLink,
  StackComponent,
} from '@/pages';

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'stack',
        element: <StackComponent />,
      },
      {
        path: 'quene',
        element: <QueneComponent />,
      },
      {
        path: 'singlyLink',
        element: <SinglyLink />,
      },
      {
        path: 'bidirectionLink',
        element: <BidirectionalLink />,
      },
      {
        path: 'binarySearchTree',
        element: <BinarySearchTreeComponent />,
      },
      {
        path: 'bubbleSort',
        element: <BubbleSort />,
      },
      {
        path: 'insertSort',
        element: <InsertSort />,
      },
      {
        path: 'chooseSort',
        element: <ChooseSort />,
      },
      {
        path: 'quickSort',
        element: <QuickSort />,
      },
      {
        path: 'complexity',
        element: <AlgorithmsComplexity />,
      },
    ],
  },
];
