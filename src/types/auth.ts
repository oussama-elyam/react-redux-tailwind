export type Auth = {
  id?: number;
  email?: string;
  role?: string;
  enabled?: boolean;
  app_admin?: boolean;
  authorities?: Authority[];
};

export type Authority = {
  authority: string;
};
