import {
  Box,
  type ToastPosition,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { getDecrypts, getEncrypts, getProfile } from "./dashboardActions";
import DecryptList from "./renders/DecryptList";
import EncryptList from "./renders/EncryptList";
import PubKeyBox from "./renders/PubKeyBox";

const DashboardView = () => {
  const toast = useToast();
  const placement = useBreakpointValue({
    base: "bottom" as ToastPosition,
    md: "top-right" as ToastPosition,
  });

  const dispatch = useAppDispatch();
  const { loading, error, profile, encrypts, decrypts } = useAppSelector(
    (state) => state.profile
  );

  const dispatchInfos = useCallback(async () => {
    await dispatch(getProfile());
    await dispatch(getEncrypts());
    await dispatch(getDecrypts());
  }, [dispatch, getProfile, getEncrypts, getDecrypts]);

  useEffect(() => {
    dispatchInfos();
  }, [dispatchInfos]);

  useEffect(() => {
    if (error) {
      toast.closeAll();
      toast({
        position: placement,
        title: "Error",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  return (
    <>
      <PubKeyBox loading={loading} pubkey={profile?.public_key ?? ""} />
      {/* Encryptions */}
      <Box mb={10}>
        <EncryptList loading={loading} encrypts={encrypts} />
      </Box>

      {/* Decryptions */}
      <Box>
        <DecryptList loading={loading} decrypts={decrypts} />
      </Box>
    </>
  );
};

export default DashboardView;
