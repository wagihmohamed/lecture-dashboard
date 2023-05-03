import { useQuery } from '@tanstack/react-query';
import { mockExams } from 'mockup';
import { sleep } from 'utlis';

export const useExamsList = () => {
	return useQuery({
		queryKey: ['exams'],
		queryFn: async () => {
			await sleep(1500);
			return mockExams;
		},
	});
};