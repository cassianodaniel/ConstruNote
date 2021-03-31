import React from "react";
import ReactImageFallback from "react-image-fallback";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthContext";

const CharTicket: React.FC = () => {
  const { users, setUsers } = useAuth();
  const deleteUser = (userId: number) => {
    const find = users.find((fakeUser) => fakeUser.id === userId);
    if (find) {
      Swal.fire({
        title: "Desejas remover este fornecedor?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim!",
        cancelButtonText: "Não",
      }).then((result) => {
        if (result.isConfirmed) {
          setUsers(users.filter((user) => user.id !== userId));
          Swal.fire("Removido!", "Este fornecedor foi removido.", "success");
        }
      });
    }
  };
  return (
    <div>
      {users.map((user, key) => {
        return (
          <div key={key} className="ticketContainer mt-2">
            <ReactImageFallback
              fallbackImage={user.profilePicture}
              className="charPic mt-4 cursor-pointer"
              src={user.profilePicture}
            />
            <div className="charDescription ml-2 mt-2">
              <div className="font-weight-bold cursor-pointer">{user.name}</div>
              <div className="text-muted d-flex flex-row cursor-pointer">
                <div>{user.classification.bronze && "Fornecedor bronze:"}</div>
                <div>{user.classification.silver && "Fornecedor prata:"}</div>
                <div>{user.classification.gold && "Fornecedor ouro:"}</div>
                <div className="ml-1 font-weight-bold text-danger">
                  {(Math.random() * 100).toString().split(".")[0].concat(".0")}
                </div>
              </div>
              <div>
                <i
                  className="font-size-13 disguiseButton"
                  onClick={() => deleteUser(user.id)}
                >
                  Excluir
                </i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharTicket;
