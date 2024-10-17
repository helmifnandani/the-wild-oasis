const queryClient = useQueryClient();
const { isLoading: isEditing, mutate: editCabin } = useMutation({
  mutationFn: ({ newCabinData, id }) => {
    createEditCabin(newCabinData, id);
  },
  onSuccess: () => {
    toast.success("Cabin successfully edited");
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
  },
  onError: (err) => toast.error(err.message),
});
