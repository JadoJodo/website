import React from 'react'
import IndexLayout from '../layouts'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledDeletionPage = styled.div`
    .intro {
        text-align: center;
        padding: 5rem  0;
    }

    .content {
        display: flex;
        padding: 5rem 0;
    }

    .text {
        background: ${colors.offWhite};
    }
`

const DeletionPage = () => (
    <IndexLayout isAFlowPage={true}>
        <StyledDeletionPage>
            <div className="row pattern">
                <div className="intro">
                    <h1><strong>How Can We Improve?</strong></h1>
                </div>
            </div>
            <div className="row">
                <div className="content">
                    <blockquote className="text">
                        <p>Hey there, It’d be great if you could shortly let us know why you uninstalled the browser extension. We’d like your feedback to understand how we can make Gitpod more useful. We’re committed to improving it, and we’re hoping to see you soon again. Best,</p>
                    </blockquote>
                    <form className="form">
                        <h3>Why did you uninstall the browser extension?</h3>
                    </form>
                </div>
            </div>
        </StyledDeletionPage>
    </IndexLayout>
)

export default DeletionPage
