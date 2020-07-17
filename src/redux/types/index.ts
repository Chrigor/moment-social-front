export interface IUserReducer {
  theme: ITheme;
}

export interface ITheme {
  primary: string, 
  secondary: string, 
  third: string, 
  quaternary: string, 
}

export interface InterfaceAllTypes {
  userReducer: IUserReducer
}