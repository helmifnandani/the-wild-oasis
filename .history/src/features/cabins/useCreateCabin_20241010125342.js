const queryClient = useQueryClient();
const { isLoading: isCreating, mutate: createCabin } = useMutation({
  mutationFn: (newcabin) => createEditCabin(newcabin),
  onSuccess: () => {
    toast.success("New Cabin successfully created");
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
    reset();
  },
  onError: (err) => toast.error(err.message),
});
const { isLoading: isEditing, mutate: editCabin } = useMutation({
  mutationFn: ({ newCabinData, id }) => {
    createEditCabin(newCabinData, id);
  },
  onSuccess: () => {
    toast.success("Cabin successfully edited");
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
    reset();
  },
  onError: (err) => toast.error(err.message),
});
