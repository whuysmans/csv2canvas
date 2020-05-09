import { getRandomIdent } from './csv'

const resourceIdent = getRandomIdent()

const options = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	timeZone: 'Europe/Brussels'
}

const getIMSManifest = ( id ) => {
	return `
	<?xml version="1.0" encoding="UTF-8"?>
	<manifest identifier="i64ca80f71733e638171c4ce9f4768495" xmlns="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1" xmlns:lom="http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource" xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1 http://www.imsglobal.org/xsd/imscp_v1p1.xsd http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource http://www.imsglobal.org/profile/cc/ccv1p1/LOM/ccv1p1_lomresource_v1p0.xsd http://www.imsglobal.org/xsd/imsmd_v1p2 http://www.imsglobal.org/xsd/imsmd_v1p2p2.xsd">
	  <metadata>
		 <schema>IMS Content</schema>
		 <schemaversion>1.1.3</schemaversion>
		 <imsmd:lom>
			<imsmd:general>
			  <imsmd:title>
				 <imsmd:string>QTI Quiz Export for course "Testcourse Dewerner4"</imsmd:string>
			  </imsmd:title>
			</imsmd:general>
			<imsmd:lifeCycle>
			  <imsmd:contribute>
				 <imsmd:date>
					<imsmd:dateTime>${ new Intl.DateTimeFormat('nl-BE', options).format(new Date()) }</imsmd:dateTime>
				 </imsmd:date>
			  </imsmd:contribute>
			</imsmd:lifeCycle>
			<imsmd:rights>
			  <imsmd:copyrightAndOtherRestrictions>
				 <imsmd:value>yes</imsmd:value>
			  </imsmd:copyrightAndOtherRestrictions>
			  <imsmd:description>
				 <imsmd:string>Private (Copyrighted) - http://en.wikipedia.org/wiki/Copyright</imsmd:string>
			  </imsmd:description>
			</imsmd:rights>
		 </imsmd:lom>
	  </metadata>
	  <organizations/>
	  <resources>
		 <resource identifier="${ id }" type="imsqti_xmlv1p2">
			<file href="${ id }.xml"/>
			<dependency identifierref="${ resourceIdent }"/>
		 </resource>
		 <resource identifier="${ resourceIdent }" type="associatedcontent/imscc_xmlv1p1/learning-application-resource" href="iba441da600eef46b9de3c734045202d8/assessment_meta.xml">
			<file href="${ id }/assessment_meta.xml"/>
		 </resource>
	  </resources>
	</manifest>
	`
}

const getAssessmentMeta = ( id, name, ident ) => {
	return `
	<?xml version="1.0" encoding="UTF-8"?>
	<quiz identifier="${ id }" xmlns="http://canvas.instructure.com/xsd/cccv1p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://canvas.instructure.com/xsd/cccv1p0 https://canvas.instructure.com/xsd/cccv1p0.xsd">
	  <title>${ name }</title>
	  <description></description>
	  <shuffle_answers>false</shuffle_answers>
	  <scoring_policy>keep_highest</scoring_policy>
	  <hide_results></hide_results>
	  <quiz_type>assignment</quiz_type>
	  <points_possible>0.0</points_possible>
	  <require_lockdown_browser>false</require_lockdown_browser>
	  <require_lockdown_browser_for_results>false</require_lockdown_browser_for_results>
	  <require_lockdown_browser_monitor>false</require_lockdown_browser_monitor>
	  <lockdown_browser_monitor_data/>
	  <show_correct_answers>true</show_correct_answers>
	  <anonymous_submissions>false</anonymous_submissions>
	  <could_be_locked>false</could_be_locked>
	  <allowed_attempts>1</allowed_attempts>
	  <one_question_at_a_time>false</one_question_at_a_time>
	  <cant_go_back>false</cant_go_back>
	  <available>false</available>
	  <one_time_results>false</one_time_results>
	  <show_correct_answers_last_attempt>false</show_correct_answers_last_attempt>
	  <only_visible_to_overrides>false</only_visible_to_overrides>
	  <module_locked>false</module_locked>
	  <assignment identifier="i7e4e62d6a7eea4dcf6351332feaafbe6">
		 <title>${ name }</title>
		 <due_at/>
		 <lock_at/>
		 <unlock_at/>
		 <module_locked>false</module_locked>
		 <workflow_state>unpublished</workflow_state>
		 <assignment_overrides>
		 </assignment_overrides>
		 <quiz_identifierref>${ ident }</quiz_identifierref>
		 <allowed_extensions></allowed_extensions>
		 <has_group_category>false</has_group_category>
		 <points_possible>0.0</points_possible>
		 <grading_type>points</grading_type>
		 <all_day>false</all_day>
		 <submission_types>online_quiz</submission_types>
		 <position>7</position>
		 <turnitin_enabled>false</turnitin_enabled>
		 <vericite_enabled>false</vericite_enabled>
		 <peer_review_count>0</peer_review_count>
		 <peer_reviews>false</peer_reviews>
		 <automatic_peer_reviews>false</automatic_peer_reviews>
		 <anonymous_peer_reviews>false</anonymous_peer_reviews>
		 <grade_group_students_individually>false</grade_group_students_individually>
		 <freeze_on_copy>false</freeze_on_copy>
		 <omit_from_final_grade>false</omit_from_final_grade>
		 <intra_group_peer_reviews>false</intra_group_peer_reviews>
		 <only_visible_to_overrides>false</only_visible_to_overrides>
		 <post_to_sis>false</post_to_sis>
		 <moderated_grading>false</moderated_grading>
		 <grader_count>0</grader_count>
		 <grader_comments_visible_to_graders>true</grader_comments_visible_to_graders>
		 <anonymous_grading>false</anonymous_grading>
		 <graders_anonymous_to_graders>false</graders_anonymous_to_graders>
		 <grader_names_visible_to_final_grader>true</grader_names_visible_to_final_grader>
		 <anonymous_instructor_annotations>false</anonymous_instructor_annotations>
		 <post_policy>
			<post_manually>true</post_manually>
		 </post_policy>
	  </assignment>
	  <assignment_group_identifierref>if91205e84770698fe7467a3b1af4a419</assignment_group_identifierref>
	  <assignment_overrides>
	  </assignment_overrides>
	</quiz>
	`
}

export { getIMSManifest, getAssessmentMeta }