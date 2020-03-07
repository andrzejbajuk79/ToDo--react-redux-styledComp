// import React, {useEffect} from 'react';
export const ProfileInitValues = request => ({
 firstName: request.profile.firstName || '',
 lastName: request.profile.lastName || '',
 email: request.auth.email || '',
 password: '',
 confirmPassword: '',
});
