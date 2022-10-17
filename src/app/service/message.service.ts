import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  userList = [
    {
      id: "1",
      name: "huy nguyen",
      phone: "9876598765",
      image: "assets/user/user-1.png",
      roomId: {
        2: "room-1",
        3: "room-2",
        4: "room-3",
      },
    },
    {
      id: "2",
      name: "manh nguyen",
      phone: "9876543210",
      image: "assets/user/user-2.png",
      roomId: {
        1: "room-1",
        3: "room-4",
        4: "room-5",
      },
    },
    {
      id: "3",
      name: "hai nguyen",
      phone: "9988776655",
      image: "assets/user/user-3.png",
      roomId: {
        1: "room-2",
        2: "room-4",
        4: "room-6",
      },
    },
    {
      id: "4",
      name: "hoan nguyen",
      phone: "9876556789",
      image: "assets/user/user-4.png",
      roomId: {
        1: "room-3",
        2: "room-5",
        3: "room-6",
      },
    },
  ];
  getAll(){
    return this.userList
  }
}
