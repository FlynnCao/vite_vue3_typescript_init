import $http from '@/utils/http';

export const getGameList = (data: any) => {
	return $http({
		url: '/gamereview/gameapi/',
		method: 'get',
		data
	})
}

