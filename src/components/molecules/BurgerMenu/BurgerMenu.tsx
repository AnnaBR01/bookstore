import Spinner from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { Button, Close, SearchHeader } from "components";
import { ROUTE } from "routes";
import { fetchSignOut, getUserInfo, useAppDispatch, useAppSelector } from "store";
import { BurgerHeader, Description, StyledBurgerMenu, WrapperContent, Error } from "./styles";

interface IProps {
  handleBurger: () => void;
}

export const BurgerMenu = ({ handleBurger }: IProps) => {
  const { isPendingAuth, error, isAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const handleAuth = (): void => {
    dispatch(fetchSignOut()).then(() => {
      handleBurger();
    });
  };

  return (
    <StyledBurgerMenu
      animate={{ y: 0 }}
      initial={{ y: "-100%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 2 }}
      onClick={handleBurger}
    >
      <WrapperContent onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}>
        <BurgerHeader>
          <Close onClick={handleBurger} />
        </BurgerHeader>

        <SearchHeader handleBurger={handleBurger} />
        {isAuth ? (
          <>
            <Link to={ROUTE.FAVORITES}>
              <Description onClick={handleBurger}>Favorites</Description>
            </Link>

            <Link to={ROUTE.CART}>
              <Description onClick={handleBurger}>Cart</Description>
            </Link>

            <Link to={ROUTE.ACCOUNT}>
              <Description onClick={handleBurger}>Account</Description>
            </Link>

            <Button type="button" value="Log Out" onClick={handleAuth}>
              <Spinner loading={isPendingAuth} size={25} />
            </Button>

            {error && <Error>{error}</Error>}
          </>
        ) : (
          <Link to={ROUTE.SIGN_IN}>
            <Button type="button" value="Sign In" onClick={handleBurger} />{" "}
          </Link>
        )}
      </WrapperContent>
    </StyledBurgerMenu>
  );
};
