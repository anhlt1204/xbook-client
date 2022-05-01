/* --- STATE --- */
export interface GlobalState {
  user: IProfile | null;
  loadingUpdateProfile: boolean;
  updateProfileStatus: boolean;

  listCategory: ICategory[];

  product: {
    list: Array<IProduct>;
    category: string;
    total_item: number;
    total_page: number;

    page: number;
    size: number;

    detail:
      | IProduct
      | {
          id: number;
          title: string;
          longDescription: string;
          categoryId: number;
          category: string;
          price: number;
          author: string;
          currentNumber: number;
          numberOfPage: number;
          quantitySelled: number;
          images: [{ link: string }];
        };
  };

  errorMessage: string;

  pathName: string;
}

export interface IProfile {
  id: number;
  status: number | null;
  createAt: string | null;
  createBy: string | null;
  updateAt: string | null;
  updateBy: string | null;
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  address: string | null;
  amount: number | null;
  email: string | null;
  phone: string | null;
  role: string | null;
}

export interface ICategory {
  id: number;
  status: number;
  createAt: string | null;
  createBy: string | null;
  updateAt: string | null;
  updateBy: string | null;
  name: string;
  description: string;
  slug: string | null;
  parentsId: null;
}

export interface IProduct {
  id: number;
  status: number;
  createAt: string | null;
  createBy: string | null;
  updateAt: string | null;
  updateBy: string | null;
  title: string;
  shortDescription: string | null;
  longDescription: string;
  categoryId: number;
  category: string;
  price: number;
  author: string;
  currentNumber: number;
  numberOfPage: number;
  slug: string | null;
  quantitySelled: number;
  images: IImage[];
}

export interface IImage {
  id: number;
  link: string;
}
