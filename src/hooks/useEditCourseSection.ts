import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCourseSectionService } from 'services';
import { ApiError } from 'models';
import { OutputBlockData } from '@editorjs/editorjs';
import { useAuth } from 'zustandStore';

export const useEditCourseSection = (data: {
	onSuccess: () => void;
	onError: (error: ApiError) => void;
	courseCodeDep: string;
	sectionOrderDep: number;
}) => {
	const { subDomain } = useAuth();
	const { onSuccess, onError, courseCodeDep, sectionOrderDep } = data;
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({
			courseCode,
			sectionOrder,
			content,
		}: {
			courseCode: string;
			sectionOrder: number;
			content: OutputBlockData[];
		}) => {
			return updateCourseSectionService(
				subDomain,
				courseCode,
				sectionOrder,
				content
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries([
				'courseContent',
				courseCodeDep,
				sectionOrderDep,
			]);
			onSuccess();
		},
		onError,
	});
};
