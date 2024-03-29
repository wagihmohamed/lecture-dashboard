import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCommentByCourseCode } from 'services';
import { ApiError } from 'models';
import { useAuth } from 'zustandStore';

export const useAddComment = (data: {
	onSuccess?: () => void;
	onError?: (error: ApiError) => void;
}) => {
	const { subDomain } = useAuth();
	const { onSuccess = () => {}, onError = () => {} } = data;
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({
			courseCode,
			content,
			sectionOrder,
		}: {
			courseCode: string;
			content: string;
			sectionOrder: number;
		}) => {
			return addCommentByCourseCode({
				orgId: subDomain,
				courseCode,
				sectionOrder,
				content,
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries(['comments']);
			onSuccess();
		},
		onError: (error: ApiError) => {
			onError(error);
		},
	});
};
