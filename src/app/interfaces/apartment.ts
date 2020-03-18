export interface Apartment {
  name: string;
  price: string;
  roomCount: number;
  guestLimit: number;
  address: string;
  averageRating: number;
  ratingCount: number;
  images: Array<string>;

  isFreeCancel: boolean;
  isOk: boolean;
  isMedal: boolean;

  ratingParts: Array<(-1 | 0 | 1)>;
}
